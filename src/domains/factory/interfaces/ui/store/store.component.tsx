import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { DealComponent } from '@/src/domains/merchandise/interfaces/ui/deals.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { MerchandiseComponent } from '@/src/domains/merchandise/interfaces/ui/merchandise.component.tsx';
import { LoggedComponent } from '@/src/domains/auth/interfaces/ui/logged/logged.component.tsx';
import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';
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
      <LoggedComponent />
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
