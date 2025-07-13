export interface MachineryState {
  clipper: number;
  clipperPrice: number;
  megaClipper: number;
  mecaClipperPrice: number;
}

export type MachAction =
  | { type: 'LOAD'; payload: MachineryState }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number };
