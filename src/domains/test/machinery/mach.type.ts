export interface MachState {
  clipper: number;
  megaClipper: number;
}

export type MachAction =
  | { type: 'LOAD'; machState: MachState }
  | { type: 'BUY_CLIPPER' }
  | { type: 'BUY_MEGA_CLIPPER' };
