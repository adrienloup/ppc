import type { AccountDispatchType, AccountType } from '@/src/context/account/type/Account.ts';
import { dataState } from '@/src/context/data/dataState.ts';
import { settingsState } from '@/src/context/settings/settingsState.ts';

export const accountReducer = (state: AccountType, action: AccountDispatchType): AccountType => {
  switch (action.type) {
    case 'LOG_IN': {
      if (!state.user[action.name]) return state;
      return {
        ...state,
        online: action.name,
      };
    }
    case 'LOG_OUT': {
      if (!state.online) return state;
      return {
        online: null,
        user: {
          ...state.user,
          [state.online]: {
            ...state.user[state.online],
            data: action.data,
            settings: {
              ...action.settings,
              date: new Date().toLocaleString('fr-FR', {
                timeZone: 'Europe/Paris',
              }),
            },
          },
        },
      };
    }
    case 'SIGN_UP': {
      if (state.user[action.name]) return state;
      return {
        online: action.name,
        user: {
          ...state.user,
          [action.name]: {
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
      };
    }
    default:
      return state;
  }
};
