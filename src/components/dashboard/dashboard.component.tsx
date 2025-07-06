import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { PaperclipComponent } from '@/src/components/dashboard/paperclip/paperclip.component.tsx';
import { ControlsComponent } from '@/src/components/dashboard/controls/controls.component.tsx';
import { LoggedComponent } from '@/src/components/common/logged/logged.component.tsx';
import { LoginComponent } from '@/src/components/common/login/login.component.tsx';

export const DashboardComponent = () => {
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <PaperclipComponent />
      <ControlsComponent />
      <LoggedComponent />
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
