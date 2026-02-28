import type { ArticleType } from "@/src/shared/ui/article/Article.ts";
import styles from "@/src/shared/ui/article/Article.module.scss";

export const Article = ({ children }: ArticleType) => {
  return (
    <article className={styles.article} role="article">
      {children}
    </article>
  );
};
