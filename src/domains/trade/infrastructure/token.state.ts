import type { Token } from '@/src/domains/trade/domain/token.type.ts';

export const TOKEN_STATE: Token = {
  BTC: { name: 'Bitcoin', price: 6e4, volume: 6e6, change: +153.22 },
  ETH: { name: 'Ethereum', price: 1e3, volume: 1e7, change: -56.45 },
  // BNB: { name: 'Binance', price: 5e2, volume: 1e6, change: -34.98 },
};
