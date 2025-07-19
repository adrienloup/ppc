import { useContext } from 'react';
import {
  MerchandisingContext,
  MerchandisingDispatchContext,
} from '@/src/domains/merchandising/infrastructure/merc.context.tsx';

export const useMerc = () => {
  const ctx = useContext(MerchandisingContext);
  if (!ctx) throw new Error('useMerchandise must be inside MerchandiseProvider');
  return ctx;
};

export const useMercDispatch = () => {
  const ctx = useContext(MerchandisingDispatchContext);
  if (!ctx) throw new Error('useMerchandiseDispatch must be inside MerchandiseProvider');
  return ctx;
};
