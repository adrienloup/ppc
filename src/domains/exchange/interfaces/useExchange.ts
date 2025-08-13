import { useContext } from 'react';
import { ExchangeContext, ExchangeDisContext } from '@/src/domains/exchange/infrastructure/exchange.context.ts';

export const useExchange = () => {
  const ctx = useContext(ExchangeContext);
  if (!ctx) throw new Error('useExchange must be inside ExchangeProvider');
  return ctx;
};

export const useExchangeDispatch = () => {
  const ctx = useContext(ExchangeDisContext);
  if (!ctx) throw new Error('useExchangeDispatch must be inside ExchangeProvider');
  return ctx;
};
