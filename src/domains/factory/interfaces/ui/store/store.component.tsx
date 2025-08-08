import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { DealComponent } from '@/src/domains/merchandise/interfaces/ui/deals.component.tsx';
import { MerchandiseComponent } from '@/src/domains/merchandise/interfaces/ui/merchandise.component.tsx';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
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
