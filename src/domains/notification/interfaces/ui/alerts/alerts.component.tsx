import type { Children } from '@/src/shared/types/children.type.ts';
import styles from '@/src/domains/notification/interfaces/ui/alerts/alerts.module.scss';

export const AlertsComponent = ({ children }: { children: Children }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
