import { useContext } from 'react';
import { SettiContext, SettiDispatchContext } from '@/src/domains/settings/infrastructure/setti.context.ts';

export const useAccount = () => {
  const ctx = useContext(SettiContext);
  if (!ctx) throw new Error('useAccount must be inside AccountProvider');
  return ctx;
};

export const useAccountDispatch = () => {
  const ctx = useContext(SettiDispatchContext);
  if (!ctx) throw new Error('useAccountDispatch must be inside AccountProvider');
  return ctx;
};
