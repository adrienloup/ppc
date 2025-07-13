import type { ProdAction, ProdState } from '@/src/domains/test/production/prod.type.ts';

export const prodReducer = (state: ProdState, action: ProdAction): ProdState => {
  switch (action.type) {
    case 'LOAD':
      return action.prodState;
    case 'AUTO_PROD':
      return { ...state, clip: state.clip + action.clip, wire: state.wire - action.clip };
    default:
      return state;
  }
};
