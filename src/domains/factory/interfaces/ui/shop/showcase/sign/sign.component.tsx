import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/shop/shop.module.scss';

export const SignComponent = () => {
  return (
    <BannerComponent
      className={styles.banner}
      title="shop"
      button="dashboard"
    />
  );
};
