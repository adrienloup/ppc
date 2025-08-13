import type { Exchange } from '@/src/domains/trade/domain/exchange.type.ts';

export const getExchange = (exchange: Exchange): Exchange => {
  const updated: Exchange = { ...exchange };
  for (const symbol of Object.keys(exchange)) {
    const crypto = exchange[symbol];
    const range = Math.random() * 400 - 200;
    const price = Math.max(0, crypto.price + range);
    const change = range;
    updated[symbol] = { ...crypto, price, change };
  }
  return updated;
};
