import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useShop } from '@/src/domains/factory/interfaces/useShop.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { StockComponent } from '@/src/domains/factory/interfaces/ui/shop/stock/stock.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/shop/shop.module.scss';

export const ShopComponent = () => {
  const { user } = useAuth();

  useShop();

  return user ? (
    <ArticleComponent>
      <CardsComponent className={styles.cards}>
        <StockComponent />
      </CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
