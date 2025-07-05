import { DialsComponent } from '@/src/components/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/dial/dial.component.tsx';
import { ValueComponent } from '@/src/components/value/value.component.tsx';
import { LabelComponent } from '@/src/components/label/label.component.tsx';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import styles from '@/src/components/dashboard/dashboard.module.scss';

export const ClipPerSecondComponent = () => {
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
        <div className={styles.buttons}>
          <ButtonComponent
            className={styles.button}
            onClick={() => console.log('clicked')}
          >
            -0.01
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => console.log('clicked')}
          >
            +0.01
          </ButtonComponent>
        </div>
      </DialComponent>
    </DialsComponent>
  );
};
