import { useContext } from 'react';
import { ResoContext, ResoDisContext } from '@/src/domains/test/resources/reso.context.tsx';

export const useReso = () => {
  const ctx = useContext(ResoContext);
  if (!ctx) throw new Error('useReso must be inside ResoProvider');
  return ctx;
};

export const useResoDis = () => {
  const ctx = useContext(ResoDisContext);
  if (!ctx) throw new Error('useResoDis must be inside ResoProvider');
  return ctx;
};
