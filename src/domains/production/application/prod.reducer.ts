import type { ProdAction, ProdState } from '@/src/domains/production/domain/prod.type.ts';

export const prodReducer = (state: ProdState, action: ProdAction): ProdState => {
  switch (action.type) {
    case 'UPDATE_CLIP':
      return {
        clip: state.clip + action.clip,
        clipPerSecond: action.clip,
      };
    default:
      return state;
  }
};
