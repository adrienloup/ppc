import { useContext } from 'react';
import { SaleContext, SaleDispatchContext } from '@/src/domains/sale/infrastructure/sale.context.tsx';

export const useSale = () => {
  const ctx = useContext(SaleContext);
  if (!ctx) throw new Error('useSale must be inside SaleProvider');
  return ctx;
};

export const useSaleDispatch = () => {
  const ctx = useContext(SaleDispatchContext);
  if (!ctx) throw new Error('useSaleDispatch must be inside SaleProvider');
  return ctx;
};
