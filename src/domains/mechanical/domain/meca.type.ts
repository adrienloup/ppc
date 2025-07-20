export type MecaState = {
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
  clipFactory: number;
  clipFactoryBonus: number;
  clipFactoryCost: number;
};

export type MecaAction =
  | { type: 'LOAD'; state: MecaState }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number };
