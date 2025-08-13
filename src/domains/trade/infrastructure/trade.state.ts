import { CASH_STATE } from '@/src/domains/trade/infrastructure/cash.state.ts';
import { WALLET_STATE } from '@/src/domains/trade/infrastructure/wallet.state.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export const TRADE_STATE: Trade = {
  wallet: WALLET_STATE,
  cash: CASH_STATE,
};
