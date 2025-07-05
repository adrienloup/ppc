import { useFactoryDispatch } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/dial/dial.component.tsx';
import { ValueComponent } from '@/src/components/value/value.component.tsx';
import { LabelComponent } from '@/src/components/label/label.component.tsx';
import { ClickerComponent } from '@/src/components/clicker/clicker.component.tsx';
// import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import styles from '@/src/components/dashboard/working/working.module.scss';

export const ClipPerSecondComponent = () => {
  const dispatch = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent>
        <ValueComponent
          className={styles.value}
          value={200}
        />
        <LabelComponent
          className={styles.label}
          label="clip per second"
        />
        <ClickerComponent
          className={styles.button}
          value={1}
          prefix={'+'}
          onClick={() => dispatch({ type: 'INCREMENT_CLIP' })}
        >
          +1
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
