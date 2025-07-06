import { useShop } from '@/src/features/factory/useShop.ts';
import { CardsComponent } from '@/src/components/common/cards/cards.component.tsx';
import { ManufacturingComponent } from '@/src/components/dashboard/manufacturing/manufacturing.component.tsx';
import { BusinessComponent } from '@/src/components/dashboard/business/business.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const ControlsComponent = () => {
  useShop();

  return (
    <CardsComponent className={styles.cards}>
      <ManufacturingComponent />
      <BusinessComponent />
    </CardsComponent>
  );
};
