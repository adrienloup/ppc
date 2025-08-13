import type { Token } from '@/src/domains/trade/domain/token.type.ts';

export const TOKEN_STATE: Token = {
  BTC: { name: 'Bitcoin', price: 6e4, volume: 6e6, change: +150.0 },
  ETH: { name: 'Ethereum', price: 1e3, volume: 1e7, change: -100.0 },
  // BNB: { name: 'Binance', price: 5e2, volume: 1e6, change: 0 },
};
