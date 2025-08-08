// import { MarketingComponent } from '@/src/domains/business/interfaces/ui/marketing.component.tsx';
import { FundsComponent } from '@/src/domains/funds/interfaces/ui/funds.component.tsx';
import { UnsoldInventoryComponent } from '@/src/domains/inventory/interfaces/ui/unsoldInventory.component.tsx';
// import { ClipPriceComponent } from '@/src/domains/sale/interfaces/ui/clipPrice.component.tsx';
// import { FundsPerSecondComponent } from '@/src/domains/sale/interfaces/ui/fundsPerSecond.component.tsx';
// import { PublicDemandComponent } from '@/src/domains/sale/interfaces/ui/publicDemand.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';
// import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';

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
      {/*<FundsPerSecondComponent />*/}
      <FundsComponent />
      <UnsoldInventoryComponent />
      {/*<ClipPriceComponent />*/}
      {/*<PublicDemandComponent />*/}
      {/*<MarketingComponent />*/}
      {/*<EmptyComponent />*/}
    </CardComponent>
  );
};
