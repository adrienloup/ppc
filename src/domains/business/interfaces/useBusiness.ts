import { useContext } from 'react';
import { BusiContext, BusiDisContext } from '@/src/domains/business/infrastructure/business.context.tsx';

export const useBusi = () => {
  const ctx = useContext(BusiContext);
  if (!ctx) throw new Error('useBusi must be inside BusinessProvider');
  return ctx;
};

export const useBusiDis = () => {
  const ctx = useContext(BusiDisContext);
  if (!ctx) throw new Error('useBusiDis must be inside BusinessProvider');
  return ctx;
};
