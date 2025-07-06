import { CardComponent } from '@/src/components/common/card/card.component.tsx';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/components/dashboard/manufacturing/clipPerSecond.component.tsx';
import { WireComponent } from '@/src/components/dashboard/manufacturing/wire.component.tsx';
import { ClipperComponent } from '@/src/components/dashboard/manufacturing/clipper.component.tsx';
import { MegaClipperComponent } from '@/src/components/dashboard/manufacturing/megaClipper.component.tsx';
import { ClipFactoryComponent } from '@/src/components/dashboard/manufacturing/clipFactory.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

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
