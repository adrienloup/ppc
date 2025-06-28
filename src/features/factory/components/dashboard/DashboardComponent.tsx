import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { CardsComponent } from '@/src/common/components/cards/CardsComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/dashboard/ManufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/dashboard/BusinessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/dashboard/ResourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/dashboard/InvestmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/dashboard/ProductionComponent.tsx';
import { SwarmComponent } from '@/src/features/factory/components/dashboard/SwarmComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/dashboard/PowerComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/DashboardComponent.module.scss';

export const DashboardComponent = () => {
  const [authentification] = useAuthentification();
  useFeature();

  return (
    <>
      <ArticleComponent>
        {authentification.user ? (
          <>
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
          </>
        ) : (
          <>
            <TurbanComponent className={styles.turban}>
              <TitleComponent className={styles.title}>dashboard</TitleComponent>
            </TurbanComponent>
            <LoginComponent className={styles.login} />
          </>
        )}
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
