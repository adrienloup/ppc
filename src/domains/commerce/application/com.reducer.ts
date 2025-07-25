import type { Commerce, CommerceDispatch } from '@/src/domains/commerce/domaine/com.type.ts';

export const commerceReducer = (state: Commerce, action: CommerceDispatch): Commerce => {
  switch (action.type) {
    case 'LOAD':
      return action.commerce;
    case 'BUY_MERCHANDISE':
      console.log('BUY_MERCHANDISE', action.merchandise);
      return state;
    default:
      return state;
  }
};
