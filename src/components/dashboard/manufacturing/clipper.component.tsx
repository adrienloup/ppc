import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/common/badge/badge.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipperComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const buyClipper = () => {
    const cost = factory.clipperCost + (Math.random() * 10 + 10); // 10 et 20
    setFactory({ type: 'BUY_CLIPPER', cost });
  };

  // if (!factory.feature.clipper.available || factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipperCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="clipper cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipper}
        />
        {factory.clipperBonus > 0 ? (
          <BadgeComponent
            value={factory.clipperBonus}
            prefix="x"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="clippers"
        />
        <ClickerComponent
          value={1}
          prefix={'+'}
          disabled={factory.funds < factory.clipperCost || factory.wire <= 0}
          onClick={buyClipper}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
