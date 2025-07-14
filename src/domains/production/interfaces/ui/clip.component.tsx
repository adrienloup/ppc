import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipComponent = () => {
  const { clip } = useProd();

  return (
    <BannerComponent
      className={styles.banner}
      title={`paperclips ${clip}`}
      button="shop"
    />
  );
};
