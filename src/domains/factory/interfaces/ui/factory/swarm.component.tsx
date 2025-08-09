import { SwarmDeliveryComponent } from '@/src/domains/swarm/interfaces/ui/swarmDelivery.component.tsx';
import { SwarmGiftsComponent } from '@/src/domains/swarm/interfaces/ui/swarmGifts.component.tsx';
import { SwarmStrategyComponent } from '@/src/domains/swarm/interfaces/ui/swarmStrategy.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const SwarmComponent = () => {
  // console.log('SwarmComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        swarm
      </TitleComponent>
      <SwarmGiftsComponent />
      <SwarmDeliveryComponent />
      {/*<SwarmDroneComponent />*/}
      {/*<SwarmSynchronizeComponent />*/}
      {/*<SwarmEntertainmentComponent />*/}
      {/*<SwarmStatusComponent />*/}
      <SwarmStrategyComponent />
      <EmptyComponent />
    </CardComponent>
  );
};
