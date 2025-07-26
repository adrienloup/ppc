import { useContext } from 'react';
import { SwarmContext, SwarmDisContext } from '@/src/domains/swarm/infrastructure/swarm.context.ts';

export const useSwarm = () => {
  const ctx = useContext(SwarmContext);
  if (!ctx) throw new Error('useSwarm must be inside SwarmProvider');
  return ctx;
};

export const useSwarmDis = () => {
  const ctx = useContext(SwarmDisContext);
  if (!ctx) throw new Error('useSwarmDis must be inside SwarmProvider');
  return ctx;
};
