import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { AccountComponent } from '@/src/components/profile/account/account.component.tsx';
import { LoginComponent } from '@/src/components/login/login.component.tsx';

export const ProfileComponent = () => {
  const { state: auth } = useAuth();
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  return (
    <>
      {auth.user ? (
        <ArticleComponent>
          <AccountComponent />
          add <button onClick={() => setFactory({ type: 'INCREMENT_CLIP' })}>+1</button>
          {factory.clip}
        </ArticleComponent>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};
