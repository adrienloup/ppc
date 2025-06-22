import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { CardsComponent } from '@/src/common/components/cards/CardsComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/manufacturing/ManufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/business/BusinessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/resources/ResourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/investments/InvestmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/production/ProductionComponent.tsx';
import { SwarmComponent } from '@/src/features/factory/components/swarm/SwarmComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/power/PowerComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/DashboardComponent.module.scss';

export const DashboardComponent = () => {
  return (
    <ArticleComponent>
      <TurbanComponent className={styles.turban}>
        <TitleComponent className={styles.title}>dashboard</TitleComponent>
        <ButtonComponent
          className={styles.button}
          to="/ppc/shop"
        >
          shop
        </ButtonComponent>
      </TurbanComponent>
      <CardsComponent className={styles.cards}>
        <ManufacturingComponent />
        <BusinessComponent />
        <ResourcesComponent />
        <InvestmentsComponent />
        <ProductionComponent />
        <SwarmComponent />
        <PowerComponent />
      </CardsComponent>
      <div className={styles.planet}></div>
      <div className={styles.stars}>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </ArticleComponent>
  );
};
