import { useContext } from 'react';
import { PowerContext, PowerDispatchContext } from '@/src/domains/power/infrastructure/power.context.tsx';

export const usePower = () => {
  const ctx = useContext(PowerContext);
  if (!ctx) throw new Error('usePower must be inside PowerProvider');
  return ctx;
};

export const usePowerDispatch = () => {
  const ctx = useContext(PowerDispatchContext);
  if (!ctx) throw new Error('usePowerDispatch must be inside PowerProvider');
  return ctx;
};
