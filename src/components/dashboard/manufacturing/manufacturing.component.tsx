import { CardComponent } from '@/src/components/card/card.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ClipPerSecondComponent } from '@/src/components/dashboard/manufacturing/clipPerSecond.component.tsx';
import styles from '@/src/components/dashboard/dashboard.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent>
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
