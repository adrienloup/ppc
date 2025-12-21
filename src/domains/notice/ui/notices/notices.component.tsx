import type { NoticesType } from '@/src/domains/notice/ui/notices/notices.type.ts';
import styles from '@/src/domains/notice/ui/notices/notices.module.scss';

export const NoticesComponent = ({ children }: NoticesType) => {
  return (
    <div className={styles.notices}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
