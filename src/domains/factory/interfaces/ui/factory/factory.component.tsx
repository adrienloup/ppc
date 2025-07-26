import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { ClipComponent } from '@/src/domains/production/interfaces/ui/clip/clip.component.tsx';
import { CardsComponent } from '@/src/shared/ui/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/domains/factory/interfaces/ui/factory/manufacturing.component.tsx';
import { BusinessComponent } from '@/src/domains/factory/interfaces/ui/factory/business.component.tsx';
import { TechnologyComponent } from '@/src/domains/factory/interfaces/ui/factory/technology.component.tsx';
import { InvestmentsComponent } from '@/src/domains/factory/interfaces/ui/factory/investments.component.tsx';
import { ProductionComponent } from '@/src/domains/factory/interfaces/ui/factory/production.component.tsx';
import { SwarmComponent } from '@/src/domains/factory/interfaces/ui/factory/swarm.component.tsx';
import { PowerComponent } from '@/src/domains/factory/interfaces/ui/factory/power.component.tsx';
import { LoggedComponent } from '@/src/domains/auth/interfaces/ui/logged/logged.component.tsx';
import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const FactoryComponent = () => {
  // console.log('FactoryComponent');
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
        <TechnologyComponent />
        <InvestmentsComponent />
        <ProductionComponent />
        <SwarmComponent />
        <PowerComponent />
      </CardsComponent>
      <LoggedComponent />
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
