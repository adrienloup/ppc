import type { Electronic, ElectronicDispatch } from '@/src/domains/electronic/domain/elec.type.ts';

export const electronicReducer = (state: Electronic, action: ElectronicDispatch): Electronic => {
  switch (action.type) {
    case 'LOAD':
      return action.electronic;
    default:
      return state;
  }
};
