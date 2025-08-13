import type { Token } from '@/src/domains/trade/domain/token.type.ts';

export const getTokens = (tokens: Token): Token => {
  const updated: Token = { ...tokens };
  for (const token of Object.keys(tokens)) {
    const crypto = tokens[token];
    const range = Math.random() * 400 - 200;
    const price = Math.max(0, crypto.price + range);
    const change = range;
    updated[token] = { ...crypto, price, change };
  }
  return updated;
};
