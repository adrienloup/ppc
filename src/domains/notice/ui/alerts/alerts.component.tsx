import type { AlertsType } from '@/src/domains/notice/ui/alerts/alerts.type.ts';
import styles from '@/src/domains/notice/ui/alerts/alerts.module.scss';

export const AlertsComponent = ({ children }: AlertsType) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
