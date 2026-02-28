import type { NoticesType } from '@/src/shared/ui/notices/Notices.ts';
import styles from '@/src/shared/ui/notices/Notices.module.scss';

export const Notices = ({ children }: NoticesType) => {
  return (
    <div className={styles.notices}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
