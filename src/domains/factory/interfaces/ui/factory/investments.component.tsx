import { ExchangeComponent } from '@/src/domains/exchange/interfaces/ui/exchange/exchange.component.tsx';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { CashComponent } from '@/src/domains/trade/interfaces/ui/cash.component.tsx';
import { WalletComponent } from '@/src/domains/trade/interfaces/ui/wallet.component.tsx';
import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const InvestmentsComponent = () => {
  const merchandise = useMerch();

  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        investments
      </TitleComponent>
      {merchandise.investments.unlocked ? (
        <>
          <ExchangeComponent />
          <WalletComponent />
          <CashComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};
