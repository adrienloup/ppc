import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { ClipComponent } from '@/src/features/factory/components/dashboard/clip/ClipComponent.tsx';
import { CardsComponent } from '@/src/common/components/cards/CardsComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/dashboard/manufacturing/ManufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/dashboard/BusinessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/dashboard/ResourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/dashboard/InvestmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/dashboard/ProductionComponent.tsx';
import { SwarmComponent } from '@/src/features/factory/components/dashboard/SwarmComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/dashboard/PowerComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
import { SpaceComponent } from '@/src/common/components/space/SpaceComponent.tsx';
import { PlanetComponent } from '@/src/common/components/planet/PlanetComponent.tsx';
import { StarsComponent } from '@/src/common/components/stars/StarsComponent.tsx';
import { StarComponent } from '@/src/common/components/star/StarComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/DashboardComponent.module.scss';

export const DashboardComponent = () => {
  const [authentification] = useAuthentification();
  useFeature();

  return (
    <>
      <ArticleComponent>
        {authentification.user ? (
          <>
            <ClipComponent />
            <CardsComponent className={styles.cards}>
              <ManufacturingComponent />
              <BusinessComponent />
              <ResourcesComponent />
              <InvestmentsComponent />
              <ProductionComponent />
              <SwarmComponent />
              <PowerComponent />
            </CardsComponent>
          </>
        ) : (
          <LoginComponent className={styles.login} />
        )}
      </ArticleComponent>
      <SpaceComponent>
        {[1, 2].map((n) => (
          <PlanetComponent
            key={n}
            className={styles[`planet${n}`]}
          />
        ))}
        <StarsComponent className={styles.stars}>
          {[1, 2, 3, 4, 5].map((n) => (
            <StarComponent
              key={n}
              className={styles[`star${n}`]}
            />
          ))}
        </StarsComponent>
      </SpaceComponent>
    </>
  );
};
