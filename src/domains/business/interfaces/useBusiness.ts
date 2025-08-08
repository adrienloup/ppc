import { useContext } from 'react';
import { BusiContext, BusiDisContext } from '@/src/domains/business/infrastructure/business.context.tsx';

export const useBusiness = () => {
  const ctx = useContext(BusiContext);
  if (!ctx) throw new Error('useBusiness must be inside BusinessProvider');
  return ctx;
};

export const useBusiDispatch = () => {
  const ctx = useContext(BusiDisContext);
  if (!ctx) throw new Error('useBusiDispatch must be inside BusinessProvider');
  return ctx;
};
