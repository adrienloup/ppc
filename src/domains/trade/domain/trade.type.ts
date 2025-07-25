import type { Token } from '@/src/domains/trade/domain/token.type.ts';
import type { Wallet } from '@/src/domains/trade/domain/wallet.type.ts';

export interface Trade {
  token: Token;
  wallet: Wallet;
}

export type TradeDispatch =
  | { type: 'LOAD'; trade: Trade }
  | { type: 'UPDATE_TOKEN'; token: string }
  | { type: 'INCREASE_WALLET'; token: string; price: number }
  | { type: 'DECREASE_WALLET'; token: string; price: number }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'WITHDRAW_CASH' };
