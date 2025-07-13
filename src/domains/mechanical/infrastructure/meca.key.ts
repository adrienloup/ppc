import type { MecaState } from '@/src/domains/mechanical/domain/meca.type.ts';

export const MECA_STATE: MecaState = {
  clipper: 0,
  clipperCost: 5,
  megaClipper: 0,
  megaClipperCost: 5e2,
  clipFactory: 0,
  clipFactoryCost: 1e5,
};

export const MECA_KEY = 'mechanical_ppc_emma0_1';
