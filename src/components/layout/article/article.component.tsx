import type { Article } from './article.type.ts';
import styles from './article.module.scss';

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
