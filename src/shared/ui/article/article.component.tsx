import { useAuth } from '@/src/domains/auth/interface/useAuth.ts';
import { LoginComponent } from '@/src/domains/auth/ui/login/login.component.tsx';
import { useProfile } from '@/src/domains/profile/interface/useProfile.ts';
import { StarterComponent } from '@/src/shared/ui/starter/starter.component.tsx';
import type { ArticleType } from '@/src/shared/ui/article/article.type.ts';
import styles from '@/src/shared/ui/article/article.module.scss';

export const ArticleComponent = ({ children }: ArticleType) => {
  const { session } = useAuth();
  const { start } = useProfile();

  return (
    <article
      className={styles.article}
      role="article"
    >
      {session ? start ? children : <StarterComponent /> : <LoginComponent />}
    </article>
  );
};
