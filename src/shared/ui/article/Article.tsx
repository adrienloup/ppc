import { Login } from '@/src/context/account/ui/login/Login.tsx';
import { useAccount } from '@/src/context/account/useAccount.ts';
import { Start } from '@/src/context/settings/ui/start/Start.tsx';
import { useSettings } from '@/src/context/settings/useSettings.ts';
import type { ArticleType } from '@/src/shared/ui/article/Article.ts';
import styles from '@/src/shared/ui/article/Article.module.scss';

export const Article = ({ children }: ArticleType) => {
  const { online } = useAccount();
  const { start } = useSettings();

  return (
    <article
      className={styles.article}
      role="article"
    >
      {online ? start ? children : <Start /> : <Login />}
    </article>
  );
};
