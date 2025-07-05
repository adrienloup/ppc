import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/components/dashboard/working/manufacturing/clipPerSecond.component.tsx';
import styles from '@/src/components/dashboard/working/working.module.scss';

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
      <ClipPerSecondComponent />
    </CardComponent>
  );
};
