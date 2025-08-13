import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/trade/interfaces/ui/crypto/crypto.module.scss';

export const WalletComponent = () => {
  const { wallet } = useTrade();

  return (
    <DialsComponent>
      {Object.entries(wallet).map(([symbol, token]) => (
        <DialComponent
          key={symbol}
          className={styles.dial}
        >
          <NumberComponent
            className={styles.value}
            value={token.quantity}
          />
        </DialComponent>
      ))}
    </DialsComponent>
  );
};
