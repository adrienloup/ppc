import { useContext } from 'react';
import {
  ProdContext,
  ProdDisContext,
} from '@/src/domains/production/infrastructure/prod.context.tsx';

export const useProd = () => {
  const ctx = useContext(ProdContext);
  if (!ctx) throw new Error('useProd must be inside ProProvider');
  return ctx;
};

export const useProdDispatch = () => {
  const ctx = useContext(ProdDisContext);
  if (!ctx) throw new Error('useProdDispatch must be inside ProProvider');
  return ctx;
};
