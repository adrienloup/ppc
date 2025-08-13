import type { Crypto } from '@/src/domains/exchange/domain/crypto.type.ts';

export type Exchange = Record<string, Crypto>;

export type ExchangeDispatch = { type: 'LOAD'; exchange: Exchange } | { type: 'EXCHANGE'; exchange: Exchange };
