import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { BannerType } from '@/src/shared/ui/banner/banner.type.ts';
import styles from '@/src/shared/ui/banner/banner.module.scss';

export const BannerComponent = ({ button, className, title }: BannerType) => {
  return (
    <div className={classNames(styles.banner, className)}>
      <TitleComponent className={styles.title}>{title}</TitleComponent>
      <ButtonComponent
        className={styles.button}
        to={`/ppc/${button}`}
      >
        {button}
      </ButtonComponent>
    </div>
  );
};
