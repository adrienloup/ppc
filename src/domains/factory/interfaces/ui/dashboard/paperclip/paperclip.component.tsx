import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const PaperclipComponent = () => {
  const { clip } = useFactory();

  return (
    <BannerComponent
      className={styles.banner}
      title={`paperclips ${clip}`}
      button="shop"
    />
  );
};
