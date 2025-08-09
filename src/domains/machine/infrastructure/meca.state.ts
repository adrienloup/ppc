import type { Machine } from '@/src/domains/machine/domain/meca.type.ts';

export const MECA_STATE: Machine = {
  clipper: 0,
  clipperBonus: 0,
  clipperCost: 5,
  harvesterDrone: 0,
  harvesterDroneCost: 1e4,
  megaClipper: 0,
  megaClipperBonus: 0,
  megaClipperCost: 5e2,
  clipFactory: 0,
  clipFactoryBonus: 0,
  clipFactoryCost: 1e5,
  wireDrone: 0,
  wireDroneCost: 1e4,
};
