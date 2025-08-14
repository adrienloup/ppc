import { useContext } from 'react';
import { MecaContext, MecaDispatchContext } from '@/src/domains/mechanical/infrastructure/meca.context.tsx';

export const useMeca = () => {
  const ctx = useContext(MecaContext);
  if (!ctx) throw new Error('useMeca must be inside MecaProvider');
  return ctx;
};

export const useMecaDispatch = () => {
  const ctx = useContext(MecaDispatchContext);
  if (!ctx) throw new Error('useMecaDispatch must be inside MecaProvider');
  return ctx;
};
