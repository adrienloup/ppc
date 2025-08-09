import type { Machine } from '@/src/domains/machine/domain/meca.type.ts';

export const MECA_STATE: Machine = {
  clipper: 0,
  clipperBonus: 0,
  clipperCost: 5,
  megaClipper: 0,
  megaClipperBonus: 0,
  megaClipperCost: 5e2,
  clipFactory: 0,
  clipFactoryBonus: 0,
  clipFactoryCost: 1e5,
};
