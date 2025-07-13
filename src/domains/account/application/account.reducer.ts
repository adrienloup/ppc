import type { AccAction, AccState } from '@/src/domains/account/domain/account.type.ts';

export const accountReducer = (state: AccState, action: AccAction): AccState => {
  switch (action.type) {
    case 'LOAD': {
      return action.state;
    }
    case 'SET_MODE': {
      return { ...state, mode: action.mode };
    }
    case 'SET_PLAY_PAUSE': {
      return { ...state, pause: !state.pause };
    }
    default:
      return state;
  }
};
