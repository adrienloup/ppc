import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { FundsPerSecondComponent } from '@/src/domains/sale/interfaces/ui/fundsPerSecond.component.tsx';
import { FundsComponent } from '@/src/domains/sale/interfaces/ui/funds.component.tsx';
import { UnsoldInventoryComponent } from '@/src/domains/sale/interfaces/ui/unsoldInventory.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/dashboard.module.scss';

export const BusinessComponent = () => {
  console.log('BusinessComponent');

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        business
      </TitleComponent>
      <FundsPerSecondComponent />
      <FundsComponent />
      <UnsoldInventoryComponent />
    </CardComponent>
  );
};
