import type { MerchandiseAction, MerchandiseState } from '@/src/domains/merchandise/domaine/merc.type.ts';

export const merchandiseReducer = (state: MerchandiseState, action: MerchandiseAction): MerchandiseState => {
  switch (action.type) {
    case 'BUY_MERCHANDISE':
      console.log('merchandise', action.merchandise);
      return state;
    default:
      return state;
  }
};
