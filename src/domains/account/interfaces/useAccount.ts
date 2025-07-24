import { useContext } from 'react';
import { AccContext, AccDispatchContext } from '@/src/domains/account/infrastructure/account.context.ts';

export const useAccount = () => {
  const ctx = useContext(AccContext);
  if (!ctx) throw new Error('useAccount must be inside AccountProvider');
  return ctx;
};

export const useAccountDispatch = () => {
  const ctx = useContext(AccDispatchContext);
  if (!ctx) throw new Error('useAccountDispatch must be inside AccountProvider');
  return ctx;
};
