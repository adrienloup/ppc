import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useMeca } from '@/src/domains/machine/interfaces/useMeca.ts';
import { OverConsumptionComponent } from '@/src/domains/power/interfaces/ui/overConsumption.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const HarvesterDroneComponent = () => {
  // console.log('HarvesterDroneComponent');
  const { harvesterDrone, harvesterDroneCost } = useMeca();
  const { funds } = useFunds();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={harvesterDroneCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="harvester drone cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={harvesterDrone}
          />
          <BadgeComponent
            prefix="x"
            value={100}
            // value={harvesterDroneBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="harvester drone"
        />
        <div className={styles.buttons}>
          <ClickerComponent
            prefix="+"
            value={1}
            disabled={funds < harvesterDroneCost}
            onClick={() => console.log('buyHarvesterDrone')}
          >
            +
          </ClickerComponent>
          <BadgeComponent value={10} />
        </div>
        <OverConsumptionComponent drone />
      </DialComponent>
    </DialsComponent>
  );
};
