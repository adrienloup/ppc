import type { Expand } from '@/src/components/common/expand/expand.type.ts';
import styles from '@/src/components/common/expand/expand.module.scss';

export const ExpandComponent = ({ title = 'title', content = 'content', open = false, toggle }: Expand) => {
  return (
    <div className={styles.expand}>
      <button
        className={styles.title}
        onClick={() => toggle!()}
      >
        {title}
      </button>
      {open && <div>{content}</div>}
    </div>
  );
};
