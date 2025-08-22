import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { MerchandiseComponent } from '@/src/domains/merchandise/interfaces/ui/merchandise.component.tsx';
import { ShoppingComponent } from '@/src/domains/merchandise/interfaces/ui/shopping.component.tsx';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const StoreComponent = () => {
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <BannerComponent
        className={styles.banner}
        title="store"
        button="factory"
      />
      <ShoppingComponent />
      <CardsComponent className={styles.cards}>
        <MerchandiseComponent />
      </CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
