import { TOKEN_STATE } from '@/src/domains/trade/infrastructure/token.state.ts';
import { WALLET_STATE } from '@/src/domains/trade/infrastructure/wallet.state.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export const TRADE_STATE: Trade = {
  token: TOKEN_STATE,
  wallet: WALLET_STATE,
};
