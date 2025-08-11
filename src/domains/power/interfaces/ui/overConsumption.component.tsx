import { useMemo } from 'react';
import { usePower } from '@/src/domains/power/interfaces/usePower.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const OverConsumptionComponent = ({
  clipFactory,
  batteryTower,
  drone,
}: {
  clipFactory?: boolean;
  batteryTower?: boolean;
  drone?: boolean;
}) => {
  const { batteryTowerConsumption, clipFactoryConsumption, consumption, droneConsumption, production, storage } =
    usePower();

  const { clipFactoryOver, batteryTowerOver, droneOver } = useMemo(() => {
    const power = production + storage;
    const over = consumption > power;
    return {
      clipFactoryOver: over || clipFactoryConsumption > power,
      batteryTowerOver: over || batteryTowerConsumption > power,
      droneOver: over || droneConsumption > power,
    };
  }, [clipFactoryConsumption, consumption, batteryTowerConsumption, droneConsumption, production, storage]);

  const overConsumption =
    (clipFactory !== undefined && clipFactory === clipFactoryOver) ||
    (batteryTower !== undefined && batteryTower === batteryTowerOver) ||
    (drone !== undefined && drone === droneOver);

  if (!overConsumption) return null;

  return (
    <BadgeComponent
      className={styles.badge}
      status="error"
      label="overconsumption"
    />
  );
};
