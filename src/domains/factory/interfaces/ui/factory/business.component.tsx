import { ClipPriceComponent } from '@/src/domains/business/interfaces/ui/clipPrice.component.tsx';
import { MarketingComponent } from '@/src/domains/business/interfaces/ui/marketing.component.tsx';
import { PublicDemandComponent } from '@/src/domains/business/interfaces/ui/publicDemand.component.tsx';
import { FundsComponent } from '@/src/domains/funds/interfaces/ui/funds.component.tsx';
import { FundsPerSecondComponent } from '@/src/domains/funds/interfaces/ui/fundsPerSecond.component.tsx';
import { UnsoldInventoryComponent } from '@/src/domains/inventory/interfaces/ui/unsoldInventory.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const BusinessComponent = () => {
  // console.log('BusinessComponent');
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
      <ClipPriceComponent />
      <PublicDemandComponent />
      <MarketingComponent />
    </CardComponent>
  );
};
