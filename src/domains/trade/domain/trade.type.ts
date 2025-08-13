import type { Exchange } from '@/src/domains/trade/domain/exchange.type.ts';
import type { Wallet } from '@/src/domains/trade/domain/wallet.type.ts';

export interface Trade {
  exchange: Exchange;
  wallet: Wallet;
}

export type TradeDispatch =
  | { type: 'LOAD'; trade: Trade }
  | { type: 'EXCHANGE'; exchange: Exchange }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'WITHDRAW_CASH' }
  | { type: 'INCREASE_WALLET'; crypto: string; price: number }
  | { type: 'DECREASE_WALLET'; crypto: string; price: number };
