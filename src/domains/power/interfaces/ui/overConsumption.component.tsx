import { getPower } from '@/src/domains/power/interfaces/getPower.ts';
import { usePower } from '@/src/domains/power/interfaces/usePower.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const OverConsumptionComponent = () => {
  // console.log('OverConsumptionComponent');
  const { clipFactoryConsumption, droneConsumption, powerProduction, powerStorage } = usePower();

  const overConsumption = getPower(droneConsumption, clipFactoryConsumption, powerProduction, powerStorage);

  // return overConsumption ? (
  return !overConsumption ? (
    <BadgeComponent
      className={styles.badge}
      status="error"
      label="overconsumption"
    />
  ) : null;
};
