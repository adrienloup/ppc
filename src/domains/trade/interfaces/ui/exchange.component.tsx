import { CryptoComponent } from '@/src/domains/trade/interfaces/ui/crypto/crypto.component.tsx';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';

export const ExchangeComponent = () => {
  // console.log('ExchangeComponent');
  const { token } = useTrade();

  return Object.entries(token).map(([symbol, token]) => (
    <CryptoComponent
      key={symbol}
      name={token.name}
      price={token.price}
      change={token.change}
    />
  ));
};
