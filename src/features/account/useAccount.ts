import { useContext } from 'react';
import { AccountContext, AccountDispatchContext } from '@/src/features/account/account.context.ts';

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error('useAccount must be inside AccountProvider');
  return ctx;
};

export const useAccountDispatch = () => {
  const ctx = useContext(AccountDispatchContext);
  if (!ctx) throw new Error('useAccountDispatch must be inside AccountProvider');
  return ctx;
};
