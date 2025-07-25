import { useContext } from 'react';
import { TradeContext, TradeDisContext } from '@/src/domains/trade/infrastructure/trade.context.ts';

export const useTrade = () => {
  const ctx = useContext(TradeContext);
  if (!ctx) throw new Error('useTrade must be inside TradeProvider');
  return ctx;
};

export const useTradeDispatch = () => {
  const ctx = useContext(TradeDisContext);
  if (!ctx) throw new Error('useTradeDispatch must be inside TradeProvider');
  return ctx;
};
