import type { Trade, TradeDispatch } from '@/src/domains/trade/domain/trade.type.ts';

export const tradeReducer = (state: Trade, action: TradeDispatch): Trade => {
  switch (action.type) {
    case 'LOAD':
      return action.trade;
    case 'INCREASE_CASH': {
      const cashIC = state.cash + action.cash;
      return {
        ...state,
        cash: cashIC,
      };
    }
    case 'DECREASE_CASH': {
      const cashDC = Math.max(0, state.cash - action.cash);
      return {
        ...state,
        cash: cashDC,
      };
    }
    case 'INCREASE_WALLET': {
      const quantityIW = state.wallet[action.symbol].quantity + 1;
      const cashIW = Math.max(0, state.cash - action.price);
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.symbol]: {
            ...state.wallet[action.symbol],
            quantity: quantityIW,
          },
        },
        cash: cashIW,
      };
    }
    case 'DECREASE_WALLET': {
      const quantityDW = Math.max(0, state.wallet[action.symbol].quantity - 1);
      const cashDW = state.cash + action.price;
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.symbol]: {
            ...state.wallet[action.symbol],
            quantity: quantityDW,
          },
        },
        cash: cashDW,
      };
    }
    default:
      return state;
  }
};
