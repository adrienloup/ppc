import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useShop } from '@/src/domains/factory/interfaces/useShop.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { PaperclipComponent } from '@/src/domains/factory/interfaces/ui/dashboard/paperclip/paperclip.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/manufacturing.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const DashboardComponent = () => {
  const { user } = useAuth();

  useShop();

  return user ? (
    <ArticleComponent>
      <PaperclipComponent />
      <CardsComponent className={styles.cards}>
        <ManufacturingComponent />
      </CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
