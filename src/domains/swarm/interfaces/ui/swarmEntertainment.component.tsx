import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmEntertainmentComponent = () => {
  const { entertainment, entertainmentCost } = useSwarm();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={entertainmentCost}
        />
        <LabelComponent
          className={styles.label}
          label="entertainment cost"
        />
        <NumberComponent
          className={styles.value}
          value={entertainment}
        />
        <LabelComponent
          className={styles.label}
          label="entertainment"
        />
      </DialComponent>
    </DialsComponent>
  );
};
