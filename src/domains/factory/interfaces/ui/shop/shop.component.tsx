import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/shop/shop.module.scss';

export const ShopComponent = () => {
  console.log('ShopComponent');
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <BannerComponent
        className={styles.banner}
        title="shop"
        button="dashboard"
      />
      <CardsComponent className={styles.cards}>shop</CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
