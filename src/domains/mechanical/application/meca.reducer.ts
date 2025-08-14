import type { MechanicalDispatch, Mechanical } from '@/src/domains/mechanical/domain/meca.type.ts';

export const mecaReducer = (state: Mechanical, action: MechanicalDispatch): Mechanical => {
  switch (action.type) {
    case 'LOAD':
      return action.mechanical;
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
    default:
      return state;
  }
};
