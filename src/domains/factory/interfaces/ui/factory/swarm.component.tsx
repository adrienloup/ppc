import { SwarmDeliveryComponent } from '@/src/domains/swarm/interfaces/ui/swarmDelivery.component.tsx';
import { SwarmDroneComponent } from '@/src/domains/swarm/interfaces/ui/swarmDrone.component.tsx';
import { SwarmEntertainmentComponent } from '@/src/domains/swarm/interfaces/ui/swarmEntertainment.component.tsx';
import { SwarmStatusComponent } from '@/src/domains/swarm/interfaces/ui/swarmStatus.component.tsx';
import { SwarmStrategyComponent } from '@/src/domains/swarm/interfaces/ui/swarmStrategy.component.tsx';
import { SwarmSynchronizeComponent } from '@/src/domains/swarm/interfaces/ui/swarmSynchronize.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmComponent = () => {
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        swarm
      </TitleComponent>
      <EmptyComponent />
      <SwarmDeliveryComponent />
      <SwarmDroneComponent />
      <SwarmSynchronizeComponent />
      <SwarmEntertainmentComponent />
      <SwarmStatusComponent />
      <SwarmStrategyComponent />
    </CardComponent>
  );
};
