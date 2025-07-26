import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/mer.type.ts';

export const merReducer = (state: Merchandise, action: MerchandiseDispatch): Merchandise => {
  switch (action.type) {
    case 'LOAD':
      return action.merchandise;
    case 'BUY_MERCHANDISE':
      console.log('BUY_MERCHANDISE', action.merchandise);
      return state;
    default:
      return state;
  }
};
