import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/merch.type.ts';

export const merchReducer = (state: Merchandise, action: MerchandiseDispatch): Merchandise => {
  switch (action.type) {
    case 'LOAD':
      return action.merchandise;
    case 'UNLOCKED_MERCHANDISE': {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          unlocked: action.unlocked ?? state[action.name].unlocked,
        },
      };
    }
    default:
      return state;
  }
};
