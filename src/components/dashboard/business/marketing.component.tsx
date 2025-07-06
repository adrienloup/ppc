import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const MarketingComponent = () => {
  const setFactory = useFactoryDispatch();
  const factory = useFactory();

  // if (!factory.feature.marketing.variable || factory.feature.clipFactory.variable) return null;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.marketingCost}
          asset="currency"
        />
        <LabelComponent
          className={styles.label}
          label="marketing cost"
        />
      </DialComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.marketing}
          valueMax={10}
        />
        <LabelComponent
          className={styles.label}
          label="marketing"
        />
        <ClickerComponent
          value={1}
          prefix="+"
          disabled={factory.funds < factory.marketingCost || factory.marketing >= 10}
          onClick={() => setFactory({ type: 'BUY_MARKETING' })}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
