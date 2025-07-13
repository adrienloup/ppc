export type ProdState = {
  clip: number;
  clipPerSecond: number;
};

export type ProdAction = { type: 'UPDATE_CLIP'; clip: number };
