import { CryptoComponent } from '@/src/domains/exchange/interfaces/ui/crypto/crypto.component.tsx';
import { useExchange } from '@/src/domains/exchange/interfaces/useExchange.ts';

export const ExchangeComponent = () => {
  const exchange = useExchange();

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
