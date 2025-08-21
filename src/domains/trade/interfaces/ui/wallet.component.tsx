import { useExchange } from '@/src/domains/exchange/interfaces/useExchange.ts';
import { useTrade, useTradeDispatch } from '@/src/domains/trade/interfaces/useTrade.ts';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const WalletComponent = () => {
  const tradeDispatch = useTradeDispatch();
  const { cash, wallet } = useTrade();
  const exchange = useExchange();

  const getPrice = (symbol: string) => exchange[symbol].price;

  const increaseWallet = (symbol: string, price: number) => {
    if (cash < price) return;
    tradeDispatch({ type: 'INCREASE_WALLET', symbol, price });
  };

  const decreaseWallet = (symbol: string, price: number, quantity: number) => {
    if (quantity < 1) return;
    tradeDispatch({ type: 'DECREASE_WALLET', symbol, price });
  };

  return (
    <DialsComponent>
      {Object.entries(wallet).map(([symbol, crypto]) => (
        <DialComponent key={symbol}>
          <NumberComponent
            className={styles.value}
            value={crypto.quantity}
          />
          <LabelComponent
            className={styles.label}
            label={crypto.name}
          />
          <div className={styles.action}>
            <ClickerComponent
              className={styles.button}
              prefix="-"
              value={1}
              disabled={crypto.quantity < 1}
              onClick={() => decreaseWallet(symbol, getPrice(symbol), crypto.quantity)}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              prefix="+"
              value={1}
              disabled={cash < getPrice(symbol)}
              onClick={() => increaseWallet(symbol, getPrice(symbol))}
            >
              +
            </ClickerComponent>
          </div>
        </DialComponent>
      ))}
    </DialsComponent>
  );
};
