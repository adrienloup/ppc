import type { Exchange } from '@/src/domains/exchange/domain/exchange.type.ts';

export const EXCHANGE_STATE: Exchange = {
  BTC: { name: 'Bitcoin', price: 6e4, volume: 6e6, change: +153.22 },
  ETH: { name: 'Ethereum', price: 2e3, volume: 105e5, change: -56.45 },
  // BNB: { name: 'Binance', price: 5e2, volume: 1e6, change: -34.98 },
};
