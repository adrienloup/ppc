import { useContext } from 'react';
import {
  ResourcesContext,
  ResourcesDisContext,
} from '@/src/domains/resources/infrastructure/resources.context.tsx';

export const useRes = () => {
  const ctx = useContext(ResourcesContext);
  if (!ctx) throw new Error('useRes must be inside ResourcesProvider');
  return ctx;
};

export const useResDispatch = () => {
  const ctx = useContext(ResourcesDisContext);
  if (!ctx) throw new Error('useResDispatch must be inside ResourcesProvider');
  return ctx;
};
