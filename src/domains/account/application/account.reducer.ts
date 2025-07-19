import type { AccountAction, AccountState } from '@/src/domains/account/domain/account.type.ts';

export const accountReducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case 'LOAD':
      return action.state;
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_PLAY_PAUSE':
      return { ...state, pause: !state.pause };
    default:
      return state;
  }
};
