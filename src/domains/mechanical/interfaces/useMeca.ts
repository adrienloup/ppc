import { useContext } from 'react';
import { MecaContext, MecaDisContext } from '@/src/domains/mechanical/infrastructure/meca.context.tsx';

export const useMeca = () => {
  const ctx = useContext(MecaContext);
  if (!ctx) throw new Error('useExp must be inside ExpProvider');
  return ctx;
};

export const useMecaDis = () => {
  const ctx = useContext(MecaDisContext);
  if (!ctx) throw new Error('useMecaDis must be inside ExpProvider');
  return ctx;
};
