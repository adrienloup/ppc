import { useContext } from 'react';
import { FundsContext, FundsDispatchContext } from '@/src/domains/funds/infrastructure/funds.context.tsx';

export const useFunds = () => {
  const ctx = useContext(FundsContext);
  if (!ctx) throw new Error('useFunds must be inside FundsProvider');
  return ctx;
};

export const useFundsDispatch = () => {
  const ctx = useContext(FundsDispatchContext);
  if (!ctx) throw new Error('useFundsDispatch must be inside FundsProvider');
  return ctx;
};
