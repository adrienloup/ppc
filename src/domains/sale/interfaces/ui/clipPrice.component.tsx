import { useSale, useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipPriceComponent = () => {
  console.log('ClipPriceComponent');
  const saleDispatch = useSaleDispatch();
  const { clipPrice, clipPriceRef, marketingBonus } = useSale();

  return (
    <DialsComponent>
      {/*{factory.paperclipPriceRef.toFixed(2)}*/}
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={clipPrice}
            asset="currency"
            decimal
          />

          <BadgeComponent
            value={marketingBonus}
            status="warning"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="clip selling price"
        />
        <div className={styles.buttons}>
          <ClickerComponent
            prefix="-"
            value={0.01 * Math.max(1, marketingBonus)}
            disabled={clipPriceRef === 0.1}
            onClick={() => saleDispatch({ type: 'DECREASE_CLIP_PRICE' })}
          >
            -
          </ClickerComponent>
          <ClickerComponent
            prefix="+"
            value={0.01 * Math.max(1, marketingBonus)}
            disabled={clipPriceRef === 1}
            onClick={() => saleDispatch({ type: 'INCREASE_CLIP_PRICE' })}
          >
            +
          </ClickerComponent>
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
