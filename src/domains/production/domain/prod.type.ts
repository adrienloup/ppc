export type Prod = {
  clip: number;
  clipPerSecond: number;
};

export type ProdDispatch =
  | { type: 'LOAD'; prod: Prod }
  | { type: 'PROD_CLIP' }
  | { type: 'AUTO_PROD_CLIP'; clip: number };
