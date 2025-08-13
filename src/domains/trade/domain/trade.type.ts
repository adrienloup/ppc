import type { Cash } from '@/src/domains/trade/domain/cash.type.ts';
import type { Wallet } from '@/src/domains/trade/domain/wallet.type.ts';

export interface Trade {
  wallet: Wallet;
  cash: Cash;
}

export type TradeDispatch =
  | { type: 'LOAD'; trade: Trade }
  | { type: 'INCREASE_CASH'; cash: number }
  | { type: 'DECREASE_CASH'; cash: number }
  | { type: 'INCREASE_WALLET'; symbol: string; price: number }
  | { type: 'DECREASE_WALLET'; symbol: string; price: number };
