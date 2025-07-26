import { useContext } from 'react';
import { ITContext, ITDispatchContext } from '@/src/domains/it/infrastructure/IT.context.tsx';

export const useIT = () => {
  const ctx = useContext(ITContext);
  if (!ctx) throw new Error('useIT must be inside ITProvider');
  return ctx;
};

export const useITDispatch = () => {
  const ctx = useContext(ITDispatchContext);
  if (!ctx) throw new Error('useITDispatch must be inside ITProvider');
  return ctx;
};
