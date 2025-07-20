import { useContext } from 'react';
import {
  MercContext,
  MercDispatchContext,
} from '@/src/domains/merchandising/infrastructure/merc.context.tsx';

export const useMerc = () => {
  const ctx = useContext(MercContext);
  if (!ctx) throw new Error('useMerchandise must be inside MerchandiseProvider');
  return ctx;
};

export const useMercDispatch = () => {
  const ctx = useContext(MercDispatchContext);
  if (!ctx) throw new Error('useMerchandiseDispatch must be inside MerchandiseProvider');
  return ctx;
};
