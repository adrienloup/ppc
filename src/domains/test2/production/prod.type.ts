export interface ProdState {
  clip: number;
}

export type ProdAction = { type: 'LOAD'; payload: ProdState } | { type: 'AUTO_UPDATE_CLIP'; clip: number };
