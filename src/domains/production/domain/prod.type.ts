export type Production = {
  clip: number;
  clipPerSecond: number;
};

export type ProductionDispatch =
  | { type: 'LOAD'; production: Production }
  | { type: 'MAKE_CLIP' }
  | { type: 'AUTO_MAKE_CLIP'; clip: number };
