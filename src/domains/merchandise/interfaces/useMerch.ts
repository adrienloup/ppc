import { useContext } from 'react';
import { MerchContext, MerchDisContext } from '@/src/domains/merchandise/infrastructure/merch.context.tsx';

export const useMerch = () => {
  const ctx = useContext(MerchContext);
  if (!ctx) throw new Error('useMerch must be inside MerProvider');
  return ctx;
};

export const useMerDispatch = () => {
  const ctx = useContext(MerchDisContext);
  if (!ctx) throw new Error('useMerDispatch must be inside MerProvider');
  return ctx;
};
