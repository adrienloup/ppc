import { useContext } from 'react';
import { MecaContext, MecaDispatchContext } from '@/src/domains/mechanical/infrastructure/meca.context.tsx';

export const useMeca = () => {
  const ctx = useContext(MecaContext);
  if (!ctx) throw new Error('useExp must be inside ExpProvider');
  return ctx;
};

export const useMecaDis = () => {
  const ctx = useContext(MecaDispatchContext);
  if (!ctx) throw new Error('useMecaDis must be inside ExpProvider');
  return ctx;
};
