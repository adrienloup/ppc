import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { DealComponent } from '@/src/domains/commerce/interfaces/ui/deal/deal.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { MerchandiseComponent } from '@/src/domains/commerce/interfaces/ui/merchandise/merchandise.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/store/store.module.scss';

export const StoreComponent = () => {
  // console.log('StoreComponent');
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <BannerComponent
        className={styles.banner}
        title="store"
        button="factory"
      />
      <DealComponent />
      <CardsComponent className={styles.cards}>
        <MerchandiseComponent />
      </CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
