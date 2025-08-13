import { useFunds, useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { usePower, usePowerDispatch } from '@/src/domains/power/interfaces/usePower.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SolarFarmComponent = () => {
  // console.log('SolarFarmComponent');
  const powerDispatch = usePowerDispatch();
  const fundsDispatch = useFundsDispatch();
  // const { batteryTower, solarFarmBonus, batteryTowerCost } = usePower();
  const { solarFarm, solarFarmCost } = usePower();
  const { funds } = useFunds();

  const buySolarFarmCost = () => {
    if (funds < solarFarmCost) return;
    const newSolarFarmCost = solarFarmCost + (Math.random() * 4e4 + 2e4); // 0 1, 0 4e4, 4e4 6e4
    powerDispatch({ type: 'SOLAR_FARM', cost: newSolarFarmCost });
    fundsDispatch({ type: 'DECREASE_FUNDS', funds: solarFarmCost });
  };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={solarFarmCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="solar farm cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={solarFarm}
          />
          <BadgeComponent
            prefix="x"
            // value={solarFarmBonus}
            value={500}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="solar farm"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < solarFarmCost}
          onClick={buySolarFarmCost}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
