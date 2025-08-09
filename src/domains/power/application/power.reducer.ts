import type { Power, PowerDispatch } from '@/src/domains/power/domain/power.type.ts';

export const powerReducer = (state: Power, action: PowerDispatch): Power => {
  switch (action.type) {
    case 'LOAD':
      return action.power;
    default:
      return state;
  }
};
