import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { BannerType } from '@/src/shared/ui/banner/banner.type.ts';
import styles from '@/src/shared/ui/banner/banner.module.scss';

export const BannerComponent = ({ className, icon, label, title }: BannerType) => {
  return (
    <div className={classNames(styles.banner, className)}>
      <TitleComponent className={styles.title}>{title}</TitleComponent>
      {label && (
        <ButtonComponent
          className={styles.button}
          to={`/ppc/${label}`}
        >
          {icon && <IconComponent icon={icon} />}
          {label}
        </ButtonComponent>
      )}
    </div>
  );
};
