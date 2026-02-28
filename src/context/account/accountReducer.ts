import type { AccountDispatchType, AccountType } from '@/src/context/account/type/Account.ts';
import { dataState } from '@/src/context/data/dataState.ts';
import { settingsState } from '@/src/context/settings/settingsState.ts';

export const accountReducer = (state: AccountType, action: AccountDispatchType): AccountType => {
  switch (action.type) {
    case 'LOG_IN': {
      if (!state.user[action.username]) return state;
      return {
        ...state,
        online: action.username,
      };
    }
    case 'LOG_OUT': {
      if (!state.online) return state;
      return {
        ...state,
        user: {
          ...state.user,
          [state.online]: {
            ...state.user[state.online],
            data: action.data,
            settings: action.settings,
          },
        },
        online: null,
      };
    }
    case 'SIGN_UP': {
      if (state.user[action.username]) return state;
      return {
        ...state,
        user: {
          ...state.user,
          [action.username]: {
            data: dataState,
            password: action.password,
            settings: {
              ...settingsState,
              date: new Date().toLocaleString('fr-FR', {
                timeZone: 'Europe/Paris',
              }),
            },
          },
        },
        online: action.username,
      };
    }
    default:
      return state;
  }
};
