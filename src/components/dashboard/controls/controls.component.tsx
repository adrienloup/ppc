import { useFeature } from '@/src/features/factory/useFeature.ts';
import { CardsComponent } from '@/src/components/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/components/dashboard/controls/manufacturing/manufacturing.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ControlsComponent = () => {
  useFeature();

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
