import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/common/badge/badge.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipFactoryComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  const buyClipFactory = () => {
    const cost = factory.clipFactoryCost + (Math.random() * 5e5 + 5e5); // 5e5 et 1e6
    setFactory({ type: 'BUY_CLIP_FACTORY', cost });
  };

  // if (!factory.feature.clipFactory.available) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipFactoryCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="clip factory cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.clipFactory}
        />
        {factory.clipFactoryBonus > 0 ? (
          <BadgeComponent
            value={factory.clipFactoryBonus}
            prefix="x"
          />
        ) : null}
        {factory.clipFactory >= 1e8 ? (
          <BadgeComponent
            label="no space"
            status="error"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="clip factories"
        />
        <ClickerComponent
          value={1}
          prefix="+"
          disabled={factory.funds < factory.clipFactoryCost || factory.clipFactory >= 1e8}
          onClick={buyClipFactory}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
