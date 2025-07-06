import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/common/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipPerSecondComponent = () => {
  const setFactory = useFactoryDispatch();
  const { clipPerSecond, wire } = useFactory();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={clipPerSecond}
        />
        <LabelComponent
          className={styles.label}
          label="clips per second"
        />
        <ClickerComponent
          value={1}
          prefix="+"
          disabled={wire <= 0}
          onClick={() => setFactory({ type: 'INCREMENT_CLIP' })}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
