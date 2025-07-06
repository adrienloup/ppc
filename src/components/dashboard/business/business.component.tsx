import { CardComponent } from '@/src/components/common/card/card.component.tsx';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { FundsComponent } from '@/src/components/dashboard/business/funds.component.tsx';
import { FundsPerSecondComponent } from '@/src/components/dashboard/business/fundsPerSecond.component.tsx';
import { UnsoldInventoryComponent } from '@/src/components/dashboard/business/unsoldInventory.component.tsx';
import { ClipPriceComponent } from '@/src/components/dashboard/business/clipPrice.component.tsx';
import { PublicDemandComponent } from '@/src/components/dashboard/business/publicDemand.component.tsx';
import { MarketingComponent } from '@/src/components/dashboard/business/marketing.component.tsx';
import styles from '@/src/components/dashboard/controls/controls.module.scss';

export const BusinessComponent = () => {
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        business
      </TitleComponent>
      <FundsComponent />
      <FundsPerSecondComponent />
      <UnsoldInventoryComponent />
      <ClipPriceComponent />
      <PublicDemandComponent />
      <MarketingComponent />
    </CardComponent>
  );
};
