export interface Machine {
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
  clipFactory: number;
  clipFactoryBonus: number;
  clipFactoryCost: number;
}

export type MachineDispatch =
  | { type: 'LOAD'; machine: Machine }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number }
  | { type: 'CLIPPER_BONUS'; bonus: number }
  | { type: 'MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'CLIP_FACTORY_BONUS'; bonus: number };
