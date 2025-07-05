import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { ShowcaseComponent } from '@/src/components/shop/showcase/showcase.component.tsx';
import { ShoppingComponent } from '@/src/components/shop/shopping/shopping.component.tsx';
import { LoggedComponent } from '@/src/components/logged/logged.component.tsx';
import { LoginComponent } from '@/src/components/login/login.component.tsx';

export const ShopComponent = () => {
  const { state } = useAuth();

  return (
    <>
      {state.account ? (
        <ArticleComponent>
          <ShowcaseComponent />
          <ShoppingComponent />
          <LoggedComponent />
        </ArticleComponent>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};
