import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/common/badge/badge.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipPriceComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  return (
    <DialsComponent>
      {/*{factory.paperclipPriceRef.toFixed(2)}*/}
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipPrice}
          asset="currency"
          decimal
        />
        {factory.marketingBonus > 0 ? (
          <BadgeComponent
            value={factory.marketingBonus}
            prefix="x"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="clip price"
        />
        <div className={styles.buttons}>
          <ClickerComponent
            value={0.01 * Math.max(1, factory.marketingBonus)}
            prefix="-"
            disabled={factory.clipPriceRef === 0.1}
            onClick={() => setFactory({ type: 'DECREASE_CLIP_SELLING_PRICE' })}
            decimal
          >
            -
          </ClickerComponent>
          <ClickerComponent
            value={0.01 * Math.max(1, factory.marketingBonus)}
            prefix="+"
            disabled={factory.clipPriceRef === 1}
            onClick={() => setFactory({ type: 'INCREASE_CLIP_SELLING_PRICE' })}
            decimal
          >
            +
          </ClickerComponent>
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
