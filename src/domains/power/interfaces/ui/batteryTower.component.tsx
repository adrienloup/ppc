import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { OverConsumptionComponent } from '@/src/domains/power/interfaces/ui/overConsumption.component.tsx';
import { usePower, usePowerDispatch } from '@/src/domains/power/interfaces/usePower.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const BatteryTowerComponent = () => {
  // console.log('BatteryTowerComponent');
  const powerDispatch = usePowerDispatch();
  const fundsDispatch = useFundsDispatch();
  // const { batteryTower, batteryTowerBonus, batteryTowerCost } = usePower();
  const { batteryTower, batteryTowerCost } = usePower();
  const { funds } = useFunds();

  const buyBatteryTower = () => {
    if (funds < batteryTowerCost) return;
    const newBatteryTowerCost = batteryTowerCost + (Math.random() * 2e3 + 2e3); // 0 1, 0 2e3, 2e3 4e3
    powerDispatch({ type: 'BATTERY_TOWER', cost: newBatteryTowerCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: batteryTowerCost });
  };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={batteryTowerCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="battery tower cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={batteryTower}
          />
          <BadgeComponent
            prefix="x"
            // value={batteryTowerBonus}
            value={500}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="battery tower"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < batteryTowerCost}
          onClick={buyBatteryTower}
        >
          +
        </ClickerComponent>
        <OverConsumptionComponent batteryTower />
      </DialComponent>
    </DialsComponent>
  );
};
