import type { Children } from '@/src/shared/types/children.type.ts';
import styles from '@/src/domains/notification/interfaces/ui/alerts/notifs.module.scss';

export const NotifsComponent = ({ children }: { children: Children }) => {
  return (
    <div className={styles.notifs}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
