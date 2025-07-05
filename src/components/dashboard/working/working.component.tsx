import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/components/dashboard/working/manufacturing/manufacturing.component.tsx';
import styles from '@/src/components/dashboard/working/working.module.scss';

export const WorkingComponent = () => {
  return (
    <CardsComponent className={styles.cards}>
      <ManufacturingComponent />
      <ManufacturingComponent />
      <ManufacturingComponent />
      <ManufacturingComponent />
      <ManufacturingComponent />
    </CardsComponent>
  );
};
