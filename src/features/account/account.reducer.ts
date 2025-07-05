import type { AccountAction, AccountState } from '@/src/features/account/account.type.ts';

export const accountReducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case 'INITIALIZE': {
      return { ...action.state };
    }
    case 'TOGGLE_PAUSE': {
      return { ...state, pause: !state.pause };
    }
    default:
      return state;
  }
};
