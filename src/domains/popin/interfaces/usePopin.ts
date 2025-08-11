import { useContext } from 'react';
import { PopinContext, PopinDisContext } from '@/src/domains/popin/infrastructure/popin.context.ts';

export const usePopin = () => {
  const ctx = useContext(PopinContext);
  if (!ctx) throw new Error('usePopin must be inside PopinProvider');
  return ctx;
};

export const usePopinDispatch = () => {
  const ctx = useContext(PopinDisContext);
  if (!ctx) throw new Error('usePopinDispatch must be inside PopinProvider');
  return ctx;
};
