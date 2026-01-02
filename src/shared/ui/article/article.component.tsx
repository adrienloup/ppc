import { useAuth } from '@/src/domains/auth/interface/useAuth.ts';
import { LoginComponent } from '@/src/domains/auth/ui/login/login.component.tsx';
import { useGame } from '@/src/domains/game/interface/useGame.ts';
import { StartComponent } from '@/src/domains/game/ui/start/start.component.tsx';
import type { ArticleType } from '@/src/shared/ui/article/article.type.ts';
import styles from '@/src/shared/ui/article/article.module.scss';

export const ArticleComponent = ({ children }: ArticleType) => {
  const { session } = useAuth();
  const { started } = useGame();

  return (
    <article
      className={styles.article}
      role="article"
    >
      {session ? started ? children : <StartComponent /> : <LoginComponent />}
    </article>
  );
};
