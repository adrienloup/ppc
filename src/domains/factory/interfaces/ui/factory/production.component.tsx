import { HarvesterDroneComponent } from '@/src/domains/electronic/interfaces/ui/harvesterDrone.component.tsx';
import { WireDroneComponent } from '@/src/domains/electronic/interfaces/ui/wireDrone.component.tsx';
import { AcquiredMatterComponent } from '@/src/domains/matter/interfaces/ui/acquiredMatter.component.tsx';
import { AvailableMatterComponent } from '@/src/domains/matter/interfaces/ui/availableMatter.component.tsx';
import { MatterPerSecondComponent } from '@/src/domains/matter/interfaces/ui/matterPerSecond.component.tsx';
import { WireMatterComponent } from '@/src/domains/matter/interfaces/ui/wireMatter.component.tsx';
import { WireMatterPerSecondComponent } from '@/src/domains/matter/interfaces/ui/wireMatterPerSecond.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ProductionComponent = () => {
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        production
      </TitleComponent>
      <EmptyComponent />
      <MatterPerSecondComponent />
      <AvailableMatterComponent />
      <AcquiredMatterComponent />
      <WireMatterPerSecondComponent />
      <WireMatterComponent />
      <HarvesterDroneComponent />
      <WireDroneComponent />
    </CardComponent>
  );
};
