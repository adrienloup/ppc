import type { Intellect, IntellectDispatch } from '@/src/domains/intellect/domaine/int.type.ts';

export const intReducer = (state: Intellect, action: IntellectDispatch): Intellect => {
  switch (action.type) {
    case 'LOAD':
      return action.intellect;
    case 'INCREASE_TRUST':
      console.log('INCREASE_TRUST', action.trust);
      return state;
    default:
      return state;
  }
};
