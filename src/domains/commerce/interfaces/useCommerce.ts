import { useContext } from 'react';
import { CommerceContext, CommerceDisContext } from '@/src/domains/commerce/infrastructure/com.context.tsx';

export const useCom = () => {
  const ctx = useContext(CommerceContext);
  if (!ctx) throw new Error('useCom must be inside CommerceProvider');
  return ctx;
};

export const useComDispatch = () => {
  const ctx = useContext(CommerceDisContext);
  if (!ctx) throw new Error('useComDispatch must be inside CommerceProvider');
  return ctx;
};
