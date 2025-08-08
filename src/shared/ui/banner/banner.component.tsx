import { classNames } from '@/src/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import type { Banner } from '@/src/shared/ui/banner/banner.type.ts';
import styles from '@/src/shared/ui/banner/banner.module.scss';

export const BannerComponent = ({ className, title, button, ...props }: Banner) => {
  const to = button ? `/ppc/${button}` : undefined;

  return (
    <div
      className={classNames(styles.banner, className)}
      {...props}
    >
      <TitleComponent className={styles.title}>{title}</TitleComponent>
      {button && (
        <ButtonComponent
          className={styles.button}
          to={to}
        >
          {button}
        </ButtonComponent>
      )}
    </div>
  );
};
