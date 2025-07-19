import { useContext } from 'react';
import {
  MerchandiseContext,
  MerchandiseDispatchContext,
} from '@/src/domains/merchandise/infrastructure/merc.context.tsx';

export const useMerchandise = () => {
  const ctx = useContext(MerchandiseContext);
  if (!ctx) throw new Error('useMerchandise must be inside MerchandiseProvider');
  return ctx;
};

export const useMerchandiseDispatch = () => {
  const ctx = useContext(MerchandiseDispatchContext);
  if (!ctx) throw new Error('useMerchandiseDispatch must be inside MerchandiseProvider');
  return ctx;
};
