import type { AccountDispatchType, AccountType } from '@/src/domain/account/type/Account.ts';

export const accountReducer = (state: AccountType, action: AccountDispatchType): AccountType => {
  switch (action.type) {
    case 'SIGN_UP': {
      if (state[action.name]) return state;
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          online: true,
          password: action.password,
        },
      };
    }
    case 'LOG_IN': {
      if (!state[action.name]) return state;
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          online: true,
        },
      };
    }
    case 'LOG_OUT': {
      if (!state[action.name]) return state;
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          online: false,
        },
      };
    }
    default:
      return state;
  }
};
