import type { Article } from '@/src/shared/components/article/article.type.ts';
import styles from '@/src/shared/components/article/article.module.scss';

export const ArticleComponent = ({ children }: Article) => {
  return (
    <article
      className={styles.article}
      role="article"
    >
      {children}
    </article>
  );
};
