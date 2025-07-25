export type Production = {
  clip: number;
  clipPerSecond: number;
};

export type ProductionDispatch =
  | { type: 'LOAD'; production: Production }
  | { type: 'PROD_CLIP' }
  | { type: 'AUTO_PROD_CLIP'; clip: number };
