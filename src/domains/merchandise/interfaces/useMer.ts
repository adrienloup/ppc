import { useContext } from 'react';
import { MerContext, MerDisContext } from '@/src/domains/merchandise/infrastructure/mer.context.tsx';

export const useMer = () => {
  const ctx = useContext(MerContext);
  if (!ctx) throw new Error('useMer must be inside MerProvider');
  return ctx;
};

export const useMerDispatch = () => {
  const ctx = useContext(MerDisContext);
  if (!ctx) throw new Error('useMerDispatch must be inside MerProvider');
  return ctx;
};
