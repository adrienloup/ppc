import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { ClipComponent } from '@/src/components/dashboard/clip/clip.component.tsx';
import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/components/dashboard/manufacturing/manufacturing.component.tsx';
import { LoginComponent } from '@/src/components/login/login.component.tsx';

export const DashboardComponent = () => {
  const { state } = useAuth();

  return (
    <>
      {state.account ? (
        <ArticleComponent>
          <ClipComponent />
          <CardsComponent>
            <ManufacturingComponent />
            <ManufacturingComponent />
            <ManufacturingComponent />
            <ManufacturingComponent />
            <ManufacturingComponent />
          </CardsComponent>
        </ArticleComponent>
      ) : (
        <LoginComponent />
      )}
    </>
  );
};
