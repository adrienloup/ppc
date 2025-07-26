import type { ChangeEvent } from 'react';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { RangebarComponent } from '@/src/shared/ui/rangebar/rangebar.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmStrategyComponent = () => {
  // console.log('SwarmStrategyComponent');
  const think = swarmStrategy / 100;
  const work = 1 - swarmStrategy / 100;

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={work}
          asset="percent"
        />
        <LabelComponent
          className={styles.label}
          label="work"
        />
        <NumberComponent
          className={styles.value}
          value={think}
          asset="percent"
        />
        <LabelComponent
          className={styles.label}
          label="think"
        />
        <RangebarComponent
          min={0}
          max={100}
          step={1}
          value={swarmStrategy}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFactory({ type: 'UPDATE_SWARM_STRATEGY', strategy: Number(e.target.value) })
          }
        />
      </DialComponent>
    </DialsComponent>
  );
};
