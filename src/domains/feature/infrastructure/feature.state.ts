import type { Feature } from '@/src/domains/feature/domain/feature.type.ts';

export const FEATURE_STATE: Feature = {
  clipper: { unlocked: false, requirement: { asset: 'funds', value: 5 } },
  clipFactory: { unlocked: false },
  swarm: { unlocked: false },
  fundsPerSecond: { unlocked: false },
  investments: { unlocked: false },
  megaClipper: { unlocked: false, requirement: { asset: 'clipper', value: 75 } },
  marketing: { unlocked: false, requirement: { asset: 'funds', value: 200 } },
  production: { unlocked: false },
  spaceExploration: { unlocked: false },
  gifts: { unlocked: false },
  harvesterDrone: { unlocked: false },
  wireDrone: { unlocked: false },
};
