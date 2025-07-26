import type { Token } from '@/src/domains/trade/domain/token.type.ts';

export const TOKEN_STATE: Token = {
  BTC: { name: 'Bitcoin', price: 6e4, change: 0 },
  ETH: { name: 'Ethereum', price: 1e3, change: 0 },
  BNB: { name: 'Binance', price: 5e2, change: 0 },
};
