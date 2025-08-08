import { SwarmStrategyComponent } from '@/src/domains/swarm/interfaces/ui/swarmStrategy.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';
// import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';

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
      <SwarmStrategyComponent />
      {/*<EmptyComponent />*/}
    </CardComponent>
  );
};
