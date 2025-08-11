import { useContext } from 'react';
import { PopinContext, PopinActionContext } from '@/src/domains/popin/infrastructure/popin.context.ts';

export const usePopin = () => {
  const ctx = useContext(PopinContext);
  if (!ctx) throw new Error('usePopin must be inside PopinProvider');
  return ctx;
};

export const usePopinAction = () => {
  const ctx = useContext(PopinActionContext);
  if (!ctx) throw new Error('usePopinAction must be inside PopinProvider');
  return ctx;
};
