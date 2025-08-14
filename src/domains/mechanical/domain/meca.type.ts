export interface Mechanical {
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

export type MechanicalDispatch =
  | { type: 'LOAD'; mechanical: Mechanical }
  | { type: 'CLIPPER'; cost: number }
  | { type: 'MEGA_CLIPPER'; cost: number }
  | { type: 'CLIP_FACTORY'; cost: number }
  | { type: 'CLIPPER_BONUS'; bonus: number }
  | { type: 'MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'CLIP_FACTORY_BONUS'; bonus: number };
