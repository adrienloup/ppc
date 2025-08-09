import { PowerConsumptionComponent } from '@/src/domains/power/interfaces/ui/powerConsumption.component.tsx';
import { PowerProductionComponent } from '@/src/domains/power/interfaces/ui/powerProduction.component.tsx';
import { PowerStorageComponent } from '@/src/domains/power/interfaces/ui/powerStorage.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const PowerComponent = () => {
  // console.log('PowerComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        power
      </TitleComponent>
      {/*Solar Farms produce 50MW/solar farm*/}
      {/*Drones consume 1MW/drone.*/}
      {/*Factories consume 200 MW/factory.*/}
      {/*Storage is useful to hedge against distractions, but it's not very much needed (until the end of Phase 2). Plus it's cheap.*/}
      <PowerConsumptionComponent />
      <PowerProductionComponent />
      <PowerStorageComponent />
      <EmptyComponent />
    </CardComponent>
  );
};
