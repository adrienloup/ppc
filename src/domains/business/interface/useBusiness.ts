import { useContext } from 'react';
import {
  BusinessContext,
  BusinessDispatchContext,
} from '@/src/domains/business/interface/business.context.tsx';

export const useBusiness = () => {
  const ctx = useContext(BusinessContext);
  if (!ctx) throw new Error('useBusiness must be inside BusinessProvider');
  return ctx;
};

export const useBusinessDispatch = () => {
  const ctx = useContext(BusinessDispatchContext);
  if (!ctx) throw new Error('useBusinessDispatch must be inside BusinessProvider');
  return ctx;
};
