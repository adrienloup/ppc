import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/dial/dial.component.tsx';
import { LabelComponent } from '@/src/components/label/label.component.tsx';
import { NumberComponent } from '@/src/components/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/badge/badge.component.tsx';
import { ClickerComponent } from '@/src/components/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipperComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const buyClipper = () => {
    const cost = factory.clipperCost + (Math.random() * 10 + 10); // 10 et 20
    setFactory({ type: 'BUY_CLIPPER', cost });
  };

  if (!factory.feature.clipper.available || factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipperCost}
          asset="currency"
        />
        {factory.clipperBonus > 0 ? (
          <BadgeComponent
            value={factory.clipperBonus}
            prefix="x"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="factory.clipperCost"
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
