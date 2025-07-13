import { useContext } from 'react';
import { AccContext, AccDisContext } from '@/src/domains/account/infrastructure/account.context.ts';

export const useAccount = () => {
  const ctx = useContext(AccContext);
  if (!ctx) throw new Error('useAccount must be inside AccountProvider');
  return ctx;
};

export const useAccountDis = () => {
  const ctx = useContext(AccDisContext);
  if (!ctx) throw new Error('useAccDis must be inside AccountProvider');
  return ctx;
};
