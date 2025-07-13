export interface ProdState {
  clip: number;
}

export type ProdAction = { type: 'LOAD'; payload: ProdState } | { type: 'UPDATE_CLIP'; clip: number };
