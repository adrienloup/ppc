import type { MachineDispatch, Machine } from '@/src/domains/machine/domain/meca.type.ts';

export const mecaReducer = (state: Machine, action: MachineDispatch): Machine => {
  switch (action.type) {
    case 'LOAD':
      return action.machine;
    case 'CLIPPER':
      return {
        ...state,
        clipper: state.clipper + 1,
        clipperCost: action.cost,
      };
    case 'MEGA_CLIPPER':
      return {
        ...state,
        megaClipper: state.megaClipper + 1,
        megaClipperCost: action.cost,
      };
    case 'CLIP_FACTORY':
      return {
        ...state,
        clipFactory: state.clipFactory + 1,
        clipFactoryCost: action.cost,
      };
    case 'CLIPPER_BONUS':
      return {
        ...state,
        clipperBonus: action.bonus,
      };
    case 'MEGA_CLIPPER_BONUS':
      return {
        ...state,
        megaClipperBonus: action.bonus,
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
