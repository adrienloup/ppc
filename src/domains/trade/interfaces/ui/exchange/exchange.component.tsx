import { CryptoComponent } from '@/src/domains/trade/interfaces/ui/crypto/crypto.component.tsx';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';

export const ExchangeComponent = () => {
  const { exchange } = useTrade();

  return Object.entries(exchange).map(([symbol, crypto]) => (
    <CryptoComponent
      key={symbol}
      name={crypto.name}
      price={crypto.price}
      volume={crypto.volume}
      change={crypto.change}
    />
  ));
};
