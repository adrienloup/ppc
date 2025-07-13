import { useContext } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';

export const useProd = () => {
  const ctx = useContext(ProdContext);
  if (!ctx) throw new Error('useExp must be inside ExpProvider');
  return ctx;
};

export const useProdDis = () => {
  const ctx = useContext(ProdDisContext);
  if (!ctx) throw new Error('useProdDis must be inside ExpProvider');
  return ctx;
};
