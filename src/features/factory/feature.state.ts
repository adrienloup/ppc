import type { FeatureState } from '@/src/features/factory/feature.type.ts';

export const FEATURE_STATE: FeatureState = {
  clipper: { active: false, enabled: false, requirement: [{ asset: 'funds', value: 5 }] },
  clipFactory: { active: false, enabled: false },
  swarm: { active: false, enabled: false },
  fundsPerSecond: { active: false, enabled: false },
  harvesterDrone: { active: false, enabled: false },
  investments: { active: false, enabled: false },
  megaClipper: { active: false, enabled: false, requirement: [{ asset: 'clipper', value: 75 }] },
  marketing: { active: false, enabled: false, requirement: [{ asset: 'funds', value: 200 }] },
  production: { active: false, enabled: false },
  spaceExploration: { active: false, enabled: false },
  swarmGifts: { active: false, enabled: false },
  wireDrone: { active: false, enabled: false },
};
