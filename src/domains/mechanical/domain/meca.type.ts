export interface Mechanical {
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
}

export type MechanicalDispatch =
  | { type: 'LOAD'; mechanical: Mechanical }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'CLIPPER_BONUS'; bonus: number }
  | { type: 'MEGA_CLIPPER_BONUS'; bonus: number };
