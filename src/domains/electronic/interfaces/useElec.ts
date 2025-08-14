import { useContext } from 'react';
import { ElectronicContext, ElectronicDisContext } from '@/src/domains/electronic/infrastructure/elec.context.tsx';

export const useElectronic = () => {
  const ctx = useContext(ElectronicContext);
  if (!ctx) throw new Error('useElectronic must be inside ElectronicProvider');
  return ctx;
};

export const useElectronicDispatch = () => {
  const ctx = useContext(ElectronicDisContext);
  if (!ctx) throw new Error('useElectronicDispatch must be inside ElectronicProvider');
  return ctx;
};
