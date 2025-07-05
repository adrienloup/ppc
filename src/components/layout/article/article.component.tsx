import type { ArticleType } from './article.type.ts';
import styles from './article.module.scss';

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
