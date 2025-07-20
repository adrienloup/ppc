import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { ClipComponent } from '@/src/domains/production/interfaces/ui/clip.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/domains/industry/interfaces/ui/manufacturing.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
import { BusinessComponent } from '@/src/domains/industry/interfaces/ui/business.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const DashboardComponent = () => {
  console.log('DashboardComponent');
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <BannerComponent
        className={styles.banner}
        title="factory"
        button="store"
      />
      <ClipComponent />
      <CardsComponent className={styles.cards}>
        <ManufacturingComponent />
        <BusinessComponent />
      </CardsComponent>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
