import { useMatter } from '@/src/domains/matter/interfaces/useMatter.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const AvailableMatterComponent = () => {
  const { availableMatter } = useMatter();
  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={availableMatter}
        />
        <LabelComponent
          className={styles.label}
          label="available matter"
        />
        <BadgeComponent
          className={styles.badge}
          status="error"
          label="no resource"
        />
      </DialComponent>
    </DialsComponent>
  );
};
