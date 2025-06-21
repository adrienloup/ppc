import type { Article } from '@/src/common/components/article/Article.ts';
import styles from '@/src/common/components/article/ArticleComponent.module.scss';

export const ArticleComponent = ({ children }: Article) => {
  return <article className={styles.article}>{children}</article>;
};
