import type { Alerts } from '@/src/domains/notification/interfaces/ui/alerts/alers.type.ts';
import styles from '@/src/domains/notification/interfaces/ui/alerts/alerts.module.scss';

export const AlertsComponent = ({ children }: Alerts) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
