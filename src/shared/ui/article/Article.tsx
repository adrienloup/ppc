import { Login } from '@/src/context/account/ui/login/Login.tsx';
// import { useUser } from '@/src/context/account/useUser.ts';
import { useAccount } from '@/src/context/account/useAccount.ts';
import type { ArticleType } from '@/src/shared/ui/article/Article.ts';
import styles from '@/src/shared/ui/article/Article.module.scss';

export const Article = ({ children }: ArticleType) => {
  // const user = useUser();
  const { online } = useAccount();

  return (
    <article
      className={styles.article}
      role="article"
    >
      {online ? children : <Login />}
    </article>
  );
};
