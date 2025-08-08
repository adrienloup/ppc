import { useInventory } from '@/src/domains/inventory/interfaces/useInventory.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const UnsoldInventoryComponent = () => {
  console.log('UnsoldInventoryComponent');
  const { unsoldInventory, unsoldInventoryBonus } = useInventory();

  return (
    <DialsComponent>
      <DialComponent>
        <div className={styles.group}>
          <NumberComponent
            className={styles.value}
            value={unsoldInventory}
          />
          <BadgeComponent
            prefix="x"
            value={unsoldInventoryBonus}
            status="success"
          />
        </div>
        <LabelComponent
          className={styles.label}
          label="unsold inventory"
        />
      </DialComponent>
    </DialsComponent>
  );
};
