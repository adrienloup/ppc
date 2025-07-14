import { useContext } from 'react';
import { AccountContext, AccountDisContext } from '@/src/domains/account/infrastructure/account.context.ts';

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error('useAccount must be inside AccountProvider');
  return ctx;
};

export const useAccountDis = () => {
  const ctx = useContext(AccountDisContext);
  if (!ctx) throw new Error('useAccDis must be inside AccountProvider');
  return ctx;
};
