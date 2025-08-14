import { useContext } from 'react';
import { MatterContext, MatterDispatchContext } from '@/src/domains/matter/infrastructure/matter.context.tsx';

export const useMatter = () => {
  const ctx = useContext(MatterContext);
  if (!ctx) throw new Error('useMatter must be inside MatterProvider');
  return ctx;
};

export const useMatterDispatch = () => {
  const ctx = useContext(MatterDispatchContext);
  if (!ctx) throw new Error('useMatterDispatch must be inside MatterProvider');
  return ctx;
};
