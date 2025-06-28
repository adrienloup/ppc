import { CardComponent } from '@/src/common/components/card/CardComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ClipPerSecondComponent } from '@/src/features/factory/components/dashboard/manufacturing/ClipPerSecondComponent.tsx';
import { WireComponent } from '@/src/features/factory/components/dashboard/manufacturing/WireComponent.tsx';
import { ClipperComponent } from '@/src/features/factory/components/dashboard/manufacturing/ClipperComponent.tsx';
import { MegaClipperComponent } from '@/src/features/factory/components/dashboard/manufacturing/MegaClipperComponent.tsx';
import { ClipFactoryComponent } from '@/src/features/factory/components/dashboard/manufacturing/ClipFactoryComponent.tsx';
import styles from '@/src/common/components/card/CardComponent.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
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
