import { useFactory } from '@/src/features/factory/useFactory.ts';
import { DialsComponent } from '@/src/components/common/dials/dials.component.tsx';
import { DialComponent } from '@/src/components/common/dial/dial.component.tsx';
import { NumberComponent } from '@/src/components/common/number/number.component.tsx';
import { BadgeComponent } from '@/src/components/common/badge/badge.component.tsx';
import { LabelComponent } from '@/src/components/common/label/label.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const UnsoldInventoryComponent = () => {
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={factory.unsoldInventory}
        />
        {factory.unsoldInventoryBonus > 0 ? (
          <BadgeComponent
            value={factory.unsoldInventoryBonus}
            prefix="x"
          />
        ) : null}
        <LabelComponent
          className={styles.label}
          label="unsold inventory"
        />
      </DialComponent>
    </DialsComponent>
  );
};
