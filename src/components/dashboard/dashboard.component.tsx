import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { ClipComponent } from '@/src/components/dashboard/clip/clip.component.tsx';
import { WorkingComponent } from '@/src/components/dashboard/working/working.component.tsx';
import { LoggedComponent } from '@/src/components/logged/logged.component.tsx';
import { LoginComponent } from '@/src/components/login/login.component.tsx';

export const DashboardComponent = () => {
  const { state } = useAuth();

  return (
    <>
      {state.account ? (
        <ArticleComponent>
          <ClipComponent />
          <WorkingComponent />
          <LoggedComponent />
        </ArticleComponent>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};
