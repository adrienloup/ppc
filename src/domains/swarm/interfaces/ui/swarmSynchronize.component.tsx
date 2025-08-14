import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { BadgeComponent } from '@/src/shared/ui/badge/badge.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmSynchronizeComponent = () => {
  const { synchronization, synchronizationCost } = useSwarm();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={synchronizationCost}
        />
        <LabelComponent
          className={styles.label}
          label="synchronization cost"
        />{' '}
        <NumberComponent
          className={styles.value}
          value={synchronization}
        />
        <LabelComponent
          className={styles.label}
          label="synchronization"
        />
        <BadgeComponent
          className={styles.badge}
          status="error"
          label="disorganization"
        />
      </DialComponent>
    </DialsComponent>
  );
};
