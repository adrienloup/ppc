import { useContext } from 'react';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/infrastructure/FactoryContext.ts';

export const useFactory = () => {
  const context = useContext(FactoryContext);
  if (!context) {
    throw new Error('useFactory must be used within a FactoryProvider');
  }
  return context;
};

export const useFactoryDispatch = () => {
  const context = useContext(FactoryDispatchContext);
  if (!context) {
    throw new Error('useFactoryDispatch must be used within a FactoryProvider');
  }
  return context;
};
