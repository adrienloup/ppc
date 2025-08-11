import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmGiftsComponent = () => {
  // console.log('SwarmGiftsComponent');
  const { swarmGifts } = useSwarm();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={swarmGifts}
          valueMax={100}
        />
        <LabelComponent
          className={styles.label}
          label="swarm gifts"
        />
      </DialComponent>
    </DialsComponent>
  );
};
