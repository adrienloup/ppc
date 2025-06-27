import type { Children } from '@/src/common/shared/types/Children.ts';
import styles from '@/src/features/notification/components/alerts/AlertsComponent.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
