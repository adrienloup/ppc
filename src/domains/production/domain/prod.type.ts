export type ProdState = {
  clip: number;
  clipPerSecond: number;
};

export type ProdAction = { type: 'LOAD'; state: ProdState } | { type: 'CLIP' } | { type: 'AUTO_CLIP'; clip: number };
