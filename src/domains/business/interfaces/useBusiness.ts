import { useContext } from 'react';
import {
  BusiContext,
  BusiDisContext,
} from '@/src/domains/business/infrastructure/business.context.tsx';

export const useBusiness = () => {
  const ctx = useContext(BusiContext);
  if (!ctx) throw new Error('useBusiness must be inside BusinessProvider');
  return ctx;
};

export const useBusinessDispatch = () => {
  const ctx = useContext(BusiDisContext);
  if (!ctx) throw new Error('useBusinessDispatch must be inside BusinessProvider');
  return ctx;
};
