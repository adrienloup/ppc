import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Banner } from '@/src/shared/ui/banner/banner.type.ts';
import styles from '@/src/shared/ui/banner/banner.module.scss';

export const BannerComponent = ({ children, className, ...props }: Banner) => {
  return (
    <div
      className={classNames([styles.banner, className])}
      {...props}
    >
      {children}
    </div>
  );
};
