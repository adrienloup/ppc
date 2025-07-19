import type {
  MerchandisingAction,
  MerchandisingState,
} from '@/src/domains/merchandising/domaine/merc.type.ts';

export const merchandisingReducer = (
  state: MerchandisingState,
  action: MerchandisingAction
): MerchandisingState => {
  switch (action.type) {
    case 'BUY_MERCHANDISE':
      console.log('merchandise', action.merchandise);
      return state;
    default:
      return state;
  }
};
