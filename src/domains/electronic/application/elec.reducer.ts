import type { Electronic, ElectronicDispatch } from '@/src/domains/electronic/domain/elec.type.ts';

export const electronicReducer = (state: Electronic, action: ElectronicDispatch): Electronic => {
  switch (action.type) {
    case 'LOAD':
      return action.electronic;
    case 'CLIP_FACTORY':
      return {
        ...state,
        clipFactory: state.clipFactory + 1,
        clipFactoryCost: action.cost,
      };
    case 'CLIP_FACTORY_BONUS':
      return {
        ...state,
        clipFactoryBonus: action.bonus,
      };
    default:
      return state;
  }
};
