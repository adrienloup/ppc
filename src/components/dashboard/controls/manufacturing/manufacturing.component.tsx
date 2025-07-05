import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/components/dashboard/controls/manufacturing/clipPerSecond.component.tsx';
import { WireComponent } from '@/src/components/dashboard/controls/manufacturing/wire.component.tsx';
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
    </CardComponent>
  );
};
