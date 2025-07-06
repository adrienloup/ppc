import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/common/badge/badge.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const MegaClipperComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const buyMegaClipper = () => {
    const cost = factory.megaClipperCost + 11e2;
    setFactory({ type: 'BUY_MEGA_CLIPPER', cost });
  };

  // if (!factory.feature.megaClipper.available || factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.megaClipperCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="mega clipper cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.megaClipper}
        />
        {factory.megaClipperBonus > 0 ? (
          <BadgeComponent
            value={factory.megaClipperBonus}
            prefix="x"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="mega clippers"
        />
        <ClickerComponent
          value={1}
          prefix="+"
          disabled={factory.funds < factory.megaClipperCost || factory.wire <= 0}
          onClick={buyMegaClipper}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
