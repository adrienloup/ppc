import { useResources, useResDispatch } from '@/src/domains/resources/interfaces/useResouces.ts';
import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const WireComponent = () => {
  console.log('WireComponent');
  // const expDispatch = useResDispatch();
  // const saleDispatch = useSaleDispatch();
  const { wire, wireCost, wireQuantity } = useResources();
  // const { funds } = useSale();
  //
  // const buyWire = () => {
  //   if (funds < wireCost) return;
  //   const cost = wireCost + (Math.random() + 0.25); // 0 1, 0.25 1.25
  //   expDispatch({ type: 'BUY_WIRE', cost });
  //   saleDispatch({ type: 'DECREASE_FUNDS', cost });
  // };

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={wireCost}
          asset="currency"
          decimal
        />
        <LabelComponent
          className={styles.label}
          label="wire cost"
        />
      </DialComponent>

      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={wire}
          />
          <BadgeComponent value={wireQuantity} />
        </div>
        <LabelComponent
          className={styles.label}
          label="wire stock"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={wireQuantity}
          // disabled={funds < wireCost}
          // onClick={buyWire}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
