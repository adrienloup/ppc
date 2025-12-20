import { useContext } from 'react';
import { SupplyContext, SupplyDispatchContext } from '@/src/domains/supply/interface/supply.context.tsx';

export const useSupply = () => {
  const ctx = useContext(SupplyContext);
  if (!ctx) throw new Error('useSupply must be inside SupplyProvider');
  return ctx;
};

export const useSupplyDispatch = () => {
  const ctx = useContext(SupplyDispatchContext);
  if (!ctx) throw new Error('useSupplyDispatch must be inside SupplyProvider');
  return ctx;
};
