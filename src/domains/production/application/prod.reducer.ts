import type { ProdAction, ProdState } from '@/src/domains/production/domain/prod.type.ts';

export const prodReducer = (state: ProdState, action: ProdAction): ProdState => {
  switch (action.type) {
    case 'LOAD':
      return action.state;
    case 'UPDATE_CLIP':
      return {
        clip: state.clip + 1,
        clipPerSecond: state.clipPerSecond + 1,
      };
    case 'UPDATE_AUTO_CLIP':
      return {
        clip: state.clip + action.clip,
        clipPerSecond: action.clip,
      };
    default:
      return state;
  }
};
