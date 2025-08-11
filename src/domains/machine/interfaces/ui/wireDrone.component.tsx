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

export const WireDroneComponent = () => {
  // console.log('WireDroneComponent');
  const { wireDrone, wireDroneCost } = useMeca();
  const { funds } = useFunds();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={wireDroneCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="wire drone cost"
        />
      </DialComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={wireDrone}
          />
          <BadgeComponent
            prefix="x"
            value={10}
            // value={wireDroneBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="wire drone"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={funds < wireDroneCost}
          onClick={() => console.log('buyWireDrone')}
        >
          +
        </ClickerComponent>
        <OverConsumptionComponent drone />
      </DialComponent>
    </DialsComponent>
  );
};
