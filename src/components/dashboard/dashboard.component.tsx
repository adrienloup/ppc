import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { ClipComponent } from '@/src/components/dashboard/clip/clip.component.tsx';
import { ControlsComponent } from '@/src/components/dashboard/controls/controls.component.tsx';
import { LoggedComponent } from '@/src/components/logged/logged.component.tsx';
import { LoginComponent } from '@/src/components/login/login.component.tsx';

export const DashboardComponent = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <ArticleComponent>
          <ClipComponent />
          <ControlsComponent />
          <LoggedComponent />
        </ArticleComponent>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};
