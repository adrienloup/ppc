export interface Production {
  clip: number;
  clipPerSecond: number;
}

export type ProductionDispatch =
  | { type: 'LOAD'; production: Production }
  | { type: 'CLIP_PER_SECOND'; clipPerSecond: number }
  | { type: 'INCREASE_CLIP'; clip: number };
