import { useAuth } from '@/src/domains/auth/interface/useAuth.ts';
import { LoginComponent } from '@/src/domains/auth/ui/login/login.component.tsx';
import { useGame } from '@/src/domains/game/interface/useGame.ts';
import { StartComponent } from '@/src/domains/game/ui/start/start.component.tsx';
import type { ArticleType } from '@/src/shared/ui/article/article.type.ts';
import styles from '@/src/shared/ui/article/article.module.scss';

export const ArticleComponent = ({ children }: ArticleType) => {
  const { user } = useAuth();
  const { game } = useGame();

  return (
    <article
      className={styles.article}
      role="article"
    >
      {user ? game ? children : <StartComponent /> : <LoginComponent />}
    </article>
  );
};
