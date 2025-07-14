import { useProd, useProdDis } from '@/src/domains/production/interfaces/useProd.ts';
import { useExp, useExpDis } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipPerSecondComponent = () => {
  console.log('ClipPerSecondComponent');
  const prodDispatch = useProdDis();
  const expDispatch = useExpDis();
  const { clipPerSecond } = useProd();
  const { wire } = useExp();

  const update = () => {
    expDispatch({ type: 'UPDATE_WIRE', wire: 1 });
    prodDispatch({ type: 'UPDATE_CLIP', clip: clipPerSecond + 1 });
  };

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
          onClick={update}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
