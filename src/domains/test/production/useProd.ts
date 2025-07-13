import { useContext } from 'react';
import { ProdContext, ProdDispatchContext } from '@/src/domains/test/production/prod.context.tsx';

export const useProd = () => {
  const ctx = useContext(ProdContext);
  if (!ctx) throw new Error('useProd must be inside ProdProvider');
  return ctx;
};

export const useProdDispatch = () => {
  const ctx = useContext(ProdDispatchContext);
  if (!ctx) throw new Error('useProdDispatch must be inside ProdProvider');
  return ctx;
};
