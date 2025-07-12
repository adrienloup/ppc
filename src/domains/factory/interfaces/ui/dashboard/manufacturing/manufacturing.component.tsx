import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/clipPerSecond.component.tsx';
import { WireComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/wire.component.tsx';
import { ClipperComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/clipper.component.tsx';
import { MegaClipperComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/megaClipper.component.tsx';
import { ClipFactoryComponent } from '@/src/domains/factory/interfaces/ui/dashboard/manufacturing/clipFactory.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        manufacturing
      </TitleComponent>
      <ClipPerSecondComponent />
      <WireComponent />
      <ClipperComponent />
      <MegaClipperComponent />
      <ClipFactoryComponent />
    </CardComponent>
  );
};
