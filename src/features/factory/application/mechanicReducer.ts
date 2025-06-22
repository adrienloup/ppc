import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const mechanicReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'BUY_CLIPPER':
      if (state.funds < state.clipperCost) return state;
      return {
        ...state,
        clipper: state.clipper + 1,
        clipperCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'BUY_MEGA_CLIPPER':
      if (state.funds < state.megaClipperCost) return state;
      return {
        ...state,
        funds: Math.max(0, state.funds - action.cost),
        megaClipper: state.megaClipper + 1,
        megaClipperCost: action.cost,
      };
    case 'BUY_CLIP_FACTORY': {
      if (state.funds < state.clipFactoryCost) return state;
      const clipFactoryBonusCP =
        state.clipFactory + 1 >= 20 ? 1e3 : state.clipFactory + 1 >= 10 ? 1e2 : state.clipFactoryBonus;
      return {
        ...state,
        clipFactory: state.clipFactory + 1,
        clipFactoryBonus: clipFactoryBonusCP,
        clipFactoryCost: action.cost,
        funds: Math.max(0, state.funds - state.clipFactoryCost),
      };
    }
    case 'BUY_HARVESTER_DRONE': {
      if (state.funds < state.harvesterDroneCost * action.harvesterDrone) return state;
      const disorganizationHD = state.harvesterDrone != state.wireDrone ? state.disorganization : 0;
      const fundsHD = Math.max(0, state.funds - state.harvesterDroneCost * action.harvesterDrone);
      return {
        ...state,
        disorganization: disorganizationHD,
        funds: fundsHD,
        harvesterDrone: state.harvesterDrone + action.harvesterDrone,
      };
    }
    case 'BUY_WIRE_DRONE': {
      if (state.funds < state.wireDroneCost * action.wireDrone) return state;
      const disorganizationWD = state.harvesterDrone != state.wireDrone ? state.disorganization : 0;
      const fundsWD = Math.max(0, state.funds - state.wireDroneCost * action.wireDrone);
      return {
        ...state,
        disorganization: disorganizationWD,
        funds: fundsWD,
        wireDrone: state.wireDrone + action.wireDrone,
      };
    }
    case 'UPDATE_CLIPPER_BONUS':
      return {
        ...state,
        clipperBonus: action.bonus,
      };
    case 'UPDATE_MEGA_CLIPPER_BONUS':
      return {
        ...state,
        megaClipperBonus: action.bonus,
      };
    default:
      return state;
  }
};
