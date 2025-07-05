import { useContext } from 'react';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/factory.context.ts';

export const useFactory = () => {
  const ctx = useContext(FactoryContext);
  if (!ctx) throw new Error('useFactory must be inside FactoryProvider');
  return ctx;
};

export const useFactoryDispatch = () => {
  const ctx = useContext(FactoryDispatchContext);
  if (!ctx) throw new Error('useFactoryDispatch must be inside FactoryProvider');
  return ctx;
};
