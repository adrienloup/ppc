import { useFactory, useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/dial/dial.component.tsx';
import { ValueComponent } from '@/src/components/value/value.component.tsx';
import { LabelComponent } from '@/src/components/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/clicker/clicker.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ClipPerSecondComponent = () => {
  const setFactory = useFactoryDispatch();
  const { clipPerSecond, wire } = useFactory();

  return (
    <DialsComponent>
      <DialComponent>
        <ValueComponent
          className={styles.value}
          value={clipPerSecond}
        />
        <LabelComponent
          className={styles.label}
          label="clip per second"
        />
        <ClickerComponent
          value={1}
          prefix={'+'}
          disabled={wire <= 0}
          onClick={() => setFactory({ type: 'INCREMENT_CLIP' })}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
