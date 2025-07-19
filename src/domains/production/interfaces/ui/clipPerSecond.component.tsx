import { useProd, useProdDis } from '@/src/domains/production/interfaces/useProd.ts';
import { useExp, useExpDispatch } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipPerSecondComponent = () => {
  console.log('ClipPerSecondComponent');
  const prodDis = useProdDis();
  const expDis = useExpDispatch();
  const { clipPerSecond } = useProd();
  const { wire } = useExp();

  const update = () => {
    prodDis({ type: 'UPDATE_CLIP' });
    expDis({ type: 'UPDATE_WIRE' });
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
          prefix="+"
          value={1}
          disabled={wire <= 0}
          onClick={update}
        >
          +1
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
