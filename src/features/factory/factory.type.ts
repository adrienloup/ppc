export interface FactoryState {
  clip: number;
}

export type FactoryAction = { type: 'INITIALIZE'; state: FactoryState } | { type: 'INCREMENT_CLIP' };
