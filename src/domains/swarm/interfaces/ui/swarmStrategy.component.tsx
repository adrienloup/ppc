import type { ChangeEvent } from 'react';
import { useSwarm, useSwarmDis } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { RangebarComponent } from '@/src/shared/ui/rangebar/rangebar.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmStrategyComponent = () => {
  // console.log('SwarmStrategyComponent');
  const swarmDispatch = useSwarmDis();
  const { swarmStrategy } = useSwarm();

  const think = swarmStrategy / 100;
  const work = 1 - swarmStrategy / 100;

  return (
    <DialsComponent
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexFlow: 'wrap',
      }}
    >
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
      </DialComponent>
      <DialComponent
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <NumberComponent
          className={styles.value}
          value={think}
          asset="percent"
        />
        <LabelComponent
          className={styles.label}
          label="think"
        />
      </DialComponent>
      <RangebarComponent
        min={0}
        max={100}
        step={1}
        value={swarmStrategy}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          swarmDispatch({ type: 'SWARM_STRATEGY', swarmStrategy: Number(e.target.value) })
        }
      />
    </DialsComponent>
  );
};
