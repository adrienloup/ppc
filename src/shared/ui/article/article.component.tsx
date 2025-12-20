import type { ArticleType } from '@/src/shared/ui/article/article.type.ts';
import styles from '@/src/shared/ui/article/article.module.scss';

export const ArticleComponent = ({ children }: ArticleType) => {
  return (
    <article
      className={styles.article}
      role="article"
    >
      {children}
    </article>
  );
};
