import { useContext } from 'react';
import { MachineryContext, MachineryDisContext } from '@/src/domains/test/machinery/machinery.context.tsx';

export const useMachinery = () => {
  const ctx = useContext(MachineryContext);
  if (!ctx) throw new Error('useMachinery must be inside ExpProvider');
  return ctx;
};

export const useMachineryDis = () => {
  const ctx = useContext(MachineryDisContext);
  if (!ctx) throw new Error('useMachineryDis must be inside ExpProvider');
  return ctx;
};
