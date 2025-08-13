import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/merch.type.ts';

export const merchReducer = (state: Merchandise, action: MerchandiseDispatch): Merchandise => {
  switch (action.type) {
    case 'LOAD':
      return action.merchandise;
    case 'MERCHANDISE':
      console.log('MERCHANDISE', action.merchandise);
      return state;
    default:
      return state;
  }
};
