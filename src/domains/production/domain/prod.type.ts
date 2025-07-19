export type ProdState = {
  clip: number;
  clipPerSecond: number;
};

export type ProdAction =
  | { type: 'LOAD'; state: ProdState }
  | { type: 'UPDATE_CLIP' }
  | { type: 'UPDATE_AUTO_CLIP'; clip: number };
