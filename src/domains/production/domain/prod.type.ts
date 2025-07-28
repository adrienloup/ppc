export interface Production {
  clip: number;
  clipPerSecond: number;
}

export type ProductionDispatch =
  | { type: 'LOAD'; production: Production }
  | { type: 'INCREASE_CLIP' }
  | { type: 'AUTO_INCREASE_CLIP'; clip: number };
