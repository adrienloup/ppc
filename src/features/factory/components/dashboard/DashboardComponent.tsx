import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { CardsComponent } from '@/src/common/components/cards/CardsComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/dashboard/manufacturing/ManufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/dashboard/business/BusinessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/dashboard/resources/ResourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/dashboard/investments/InvestmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/dashboard/production/ProductionComponent.tsx';
import { SwarmComponent } from '@/src/features/factory/components/dashboard/swarm/SwarmComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/dashboard/power/PowerComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/DashboardComponent.module.scss';

export const DashboardComponent = () => {
  return (
    <>
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
      </ArticleComponent>
      <div className={styles.planet}></div>
      <div className={styles.stars}>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </>
  );
};
