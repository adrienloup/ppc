import { useContext } from 'react';
import { IntContext, IntDisContext } from '@/src/domains/intellect/infrastructure/int.context.tsx';

export const useInt = () => {
  const ctx = useContext(IntContext);
  if (!ctx) throw new Error('useInt must be inside IntellectProvider');
  return ctx;
};

export const useIntDispatch = () => {
  const ctx = useContext(IntDisContext);
  if (!ctx) throw new Error('useIntDispatch must be inside IntellectProvider');
  return ctx;
};
