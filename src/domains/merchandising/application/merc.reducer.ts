import type { MercAction, MercState } from '@/src/domains/merchandising/domaine/merc.type.ts';

export const mercReducer = (state: MercState, action: MercAction): MercState => {
  switch (action.type) {
    case 'LOAD':
      return action.state;
    case 'BUY_MERCHANDISE':
      console.log('BUY_MERCHANDISE', action.merchandise);
      return state;
    default:
      return state;
  }
};
