import type { FeatureState } from '@/src/features/factory/feature.type.ts';

export const FEATURE_STATE: FeatureState = {
  clipper: { available: false, requirements: [{ asset: 'clip', value: 5 }] },
  clipFactory: { available: false },
  swarm: { available: false },
  fundsPerSecond: { available: false },
  harvesterDrone: { available: false },
  investments: { available: false },
  megaClipper: { available: false, requirements: [{ asset: 'clipper', value: 75 }] },
  marketing: { available: false, requirements: [{ asset: 'funds', value: 200 }] },
  production: { available: false },
  spaceExploration: { available: false },
  swarmGifts: { available: false },
  wireDrone: { available: false },
};
