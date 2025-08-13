import { EXCHANGE_STATE } from '@/src/domains/trade/infrastructure/exchange.state.ts';
import { WALLET_STATE } from '@/src/domains/trade/infrastructure/wallet.state.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export const TRADE_STATE: Trade = {
  exchange: EXCHANGE_STATE,
  wallet: WALLET_STATE,
};
