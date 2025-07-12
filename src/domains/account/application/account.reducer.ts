import type { AccountAction, AccountState } from '@/src/domains/account/domain/account.type.ts';

export const accountReducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case 'INITIALIZE': {
      return action.state;
    }
    case 'TOGGLE_PLAY': {
      return { ...state, play: !state.play };
    }
    default:
      return state;
  }
};
