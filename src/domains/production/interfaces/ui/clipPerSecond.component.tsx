import { useProd, useProdDispatch } from '@/src/domains/production/interfaces/useProd.ts';
import { useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { useExp, useExpDispatch } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipPerSecondComponent = () => {
  console.log('ClipPerSecondComponent');
  const prodDispatch = useProdDispatch();
  const saleDispatch = useSaleDispatch();
  const expDispatch = useExpDispatch();
  const { clipPerSecond } = useProd();
  const { wire } = useExp();

  const makeClip = () => {
    prodDispatch({ type: 'CLIP' });
    saleDispatch({ type: 'UNSOLD_INVENTORY' });
    expDispatch({ type: 'WIRE' });
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
          onClick={makeClip}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
