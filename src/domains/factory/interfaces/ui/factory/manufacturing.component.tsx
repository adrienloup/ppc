import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/domains/production/interfaces/ui/clipPerSecond.component.tsx';
// import { WireComponent } from '@/src/domains/exploitation/interfaces/ui/wire.component.tsx';
import { ClipperComponent } from '@/src/domains/mechanical/interfaces/ui/clipper.component.tsx';
// import { ClipperComponent } from '@/src/domains/mechanical/interfaces/ui/clipper.component.tsx';
import { MegaClipperComponent } from '@/src/domains/mechanical/interfaces/ui/megaClipper.component.tsx';
// import { ClipFactoryComponent } from '@/src/domains/mechanical/interfaces/ui/clipFactory.component.tsx';
// import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ManufacturingComponent = () => {
  // console.log('ManufacturingComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        manufacturing
      </TitleComponent>
      <ClipPerSecondComponent />
      {/*<WireComponent />*/}
      <ClipperComponent />
      <MegaClipperComponent />
      {/*<ClipFactoryComponent />*/}
      {/*<EmptyComponent />*/}
    </CardComponent>
  );
};
