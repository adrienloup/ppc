import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/merchandise/interfaces/ui/store/store.module.scss';

export const StoreComponent = () => {
  console.log('StoreComponent');
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <BannerComponent
        className={styles.banner}
        title="store"
        button="factory"
      />
      <CardsComponent className={styles.cards}>store</CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
