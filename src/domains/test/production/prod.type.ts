export interface ProdState {
  clip: number;
  wire: number;
}

export type ProdAction = { type: 'LOAD'; prodState: ProdState } | { type: 'AUTO_PROD'; clip: number };
