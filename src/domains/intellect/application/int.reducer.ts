import type { Intellect, IntellectDispatch } from '@/src/domains/intellect/domaine/int.type.ts';

export const intReducer = (state: Intellect, action: IntellectDispatch): Intellect => {
  switch (action.type) {
    case 'LOAD':
      return action.intellect;
    case 'INCREASE_TRUST':
      return {
        ...state,
        trust: Math.max(0, Math.min(state.trust + action.trust, 100)),
      };
    default:
      return state;
  }
};
