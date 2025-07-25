import { useContext } from 'react';
import {
  IntelContext,
  IntelDisContext,
} from '@/src/domains/intelligence/infrastructure/intel.context.tsx';

export const useIntel = () => {
  const ctx = useContext(IntelContext);
  if (!ctx) throw new Error('useIntel must be inside IntelligenceProvider');
  return ctx;
};

export const useIntelDispatch = () => {
  const ctx = useContext(IntelDisContext);
  if (!ctx) throw new Error('useIntelDispatch must be inside IntelligenceProvider');
  return ctx;
};
