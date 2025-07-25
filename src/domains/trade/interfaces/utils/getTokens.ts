import type { Token } from '@/src/domains/trade/domain/token.type.ts';

export const getTokens = (tokens: Token): Token => {
  const updated: Token = { ...tokens };
  for (const token of Object.keys(tokens)) {
    const data = tokens[token];
    const range = Math.random() * 400 - 200;
    const price = Math.max(0, data.price + range);
    const volume = Math.max(0, data.volume + range);
    const change = range;
    updated[token] = { ...data, price, volume, change };
  }
  return updated;
};
