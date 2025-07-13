export type MecaState = {
  clipper: number;
  clipperCost: number;
  megaClipper: number;
  megaClipperCost: number;
  clipFactory: number;
  clipFactoryCost: number;
};

export type MecaAction =
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number };
