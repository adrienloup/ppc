import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { CryptoComponent } from '@/src/domains/trade/interfaces/ui/crypto/crypto.component.tsx';

export const ExchangeComponent = () => {
  // console.log('ExchangeComponent');
  const { token } = useTrade();

  return (
    <DialsComponent>
      {Object.entries(token).map(([symbol, token]) => (
        <CryptoComponent
          key={symbol}
          name={token.name}
          price={token.price}
          change={token.change}
        />
      ))}
    </DialsComponent>
  );
};
