import { useContext } from 'react';
import {
  EngineryContext,
  EngineryDispatchContext,
} from '@/src/domains/enginery/interface/enginery.context.tsx';

export const useEnginery = () => {
  const ctx = useContext(EngineryContext);
  if (!ctx) throw new Error('useEnginery must be inside EngineryProvider');
  return ctx;
};

export const useEngineryDispatch = () => {
  const ctx = useContext(EngineryDispatchContext);
  if (!ctx) throw new Error('useEngineryDispatch must be inside EngineryProvider');
  return ctx;
};
