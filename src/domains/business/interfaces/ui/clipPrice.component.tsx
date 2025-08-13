import { useBusiDispatch, useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipPriceComponent = () => {
  // console.log('ClipPriceComponent');
  const businessDispatch = useBusiDispatch();
  const { clipPrice, clipPriceRef, marketingBonus } = useBusiness();

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
            prefix="x"
            value={10}
            // value={marketingBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="clip selling price"
        />
        <div className={styles.action}>
          <ClickerComponent
            className={styles.button}
            prefix="-"
            value={0.01 * Math.max(1, marketingBonus)}
            disabled={clipPriceRef === 0.1}
            onClick={() => businessDispatch({ type: 'DECREASE_CLIP_PRICE' })}
            decimal
          >
            -
          </ClickerComponent>
          <ClickerComponent
            className={styles.button}
            prefix="+"
            value={0.01 * Math.max(1, marketingBonus)}
            disabled={clipPriceRef === 1}
            onClick={() => businessDispatch({ type: 'INCREASE_CLIP_PRICE' })}
            decimal
          >
            +
          </ClickerComponent>
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
