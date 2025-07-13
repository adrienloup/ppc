import { useContext } from 'react';
import { MachContext, MachDispatchContext } from '@/src/domains/test/machinery/mach.context.tsx';

export const useMach = () => {
  const ctx = useContext(MachContext);
  if (!ctx) throw new Error('useMach must be inside MachProvider');
  return ctx;
};

export const useMachDispatch = () => {
  const ctx = useContext(MachDispatchContext);
  if (!ctx) throw new Error('useMachDispatch must be inside MachProvider');
  return ctx;
};
