import { useInventoryDispatch } from '@/src/domains/inventory/interfaces/useInventory.ts';
import { useProd, useProdDispatch } from '@/src/domains/production/interfaces/useProd.ts';
import { useResDispatch, useResources } from '@/src/domains/resources/interfaces/useResouces.ts';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipPerSecondComponent = () => {
  // console.log('ClipPerSecondComponent');
  const productionDispatch = useProdDispatch();
  const resourcesDispatch = useResDispatch();
  const inventoryDispatch = useInventoryDispatch();
  const { clipPerSecond } = useProd();
  const { wire } = useResources();

  const increaseClip = () => {
    productionDispatch({ type: 'INCREASE_CLIP', clip: 1, clipPerSecond: clipPerSecond + 1 });
    inventoryDispatch({ type: 'INCREASE_INVENTORY', unsoldInventory: 1 });
    resourcesDispatch({ type: 'DECREASE_WIRE', wire: 1 });
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
          className={styles.button}
          prefix="+"
          value={1}
          disabled={wire <= 0}
          onClick={increaseClip}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
