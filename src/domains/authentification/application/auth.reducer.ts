import type { AuthAction, AuthState } from '@/src/domains/authentification/domain/auth.type.ts';
import { ACCOUNT_STATE } from '@/src/domains/account/infrastructure/account.state.ts';
import { EXP_STATE } from '@/src/domains/exploitation/infrastructure/exp.state.ts';
import { MECA_STATE } from '@/src/domains/mechanical/infrastructure/meca.state.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { MERC_STATE } from '@/src/domains/merchandising/infrastructure/merc.state.ts';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOAD': {
      return {
        ...state,
        user: action.username,
        load: null,
      };
    }
    case 'SIGN_UP': {
      if (state.users[action.username]) return state;

      return {
        ...state,
        users: {
          ...state.users,
          [action.username]: {
            password: action.password,
            account: ACCOUNT_STATE,
            exploitation: EXP_STATE,
            mechanical: MECA_STATE,
            sale: SALE_STATE,
            production: PROD_STATE,
            merchandising: MERC_STATE,
          },
        },
        load: action.username,
      };
    }
    case 'LOG_IN': {
      if (!state.users[action.username]) return state;

      return {
        ...state,
        load: action.username,
      };
    }
    case 'LOG_OUT': {
      if (!state.user) return state;

      return {
        ...state,
        user: null,
        save: state.user,
      };
    }
    case 'SAVE': {
      return {
        ...state,
        save: null,
      };
    }
    default:
      return state;
  }
};
