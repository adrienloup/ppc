import type { AccountDispatchType, AccountType } from '@/src/context/account/Account.ts';

export const accountReducer = (state: AccountType, action: AccountDispatchType): AccountType => {
  switch (action.type) {
    case 'LOG_IN': {
      if (!state[action.username]) return state;
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          online: true,
        },
      };
    }
    case 'LOG_OUT': {
      if (!state[action.username]) return state;
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          online: false,
          settings: action.settings,
        },
      };
    }
    case 'SIGN_UP': {
      if (state[action.username]) return state;
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          online: true,
          password: action.password,
        },
      };
    }
    default:
      return state;
  }
};
