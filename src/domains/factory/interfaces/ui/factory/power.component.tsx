import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { BatteryTowerComponent } from '@/src/domains/power/interfaces/ui/batteryTower.component.tsx';
import { PowerConsumptionComponent } from '@/src/domains/power/interfaces/ui/powerConsumption.component.tsx';
import { PowerPerformanceComponent } from '@/src/domains/power/interfaces/ui/powerPerformance.component.tsx';
import { PowerProductionComponent } from '@/src/domains/power/interfaces/ui/powerProduction.component.tsx';
import { PowerStorageComponent } from '@/src/domains/power/interfaces/ui/powerStorage.component.tsx';
import { SolarFarmComponent } from '@/src/domains/power/interfaces/ui/solarFarm.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const PowerComponent = () => {
  const merchandise = useMerch();

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        power
      </TitleComponent>
      {merchandise.power.unlocked ? (
        <>
          <PowerPerformanceComponent />
          <PowerConsumptionComponent />
          <PowerProductionComponent />
          <SolarFarmComponent />
          <PowerStorageComponent />
          <BatteryTowerComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};
