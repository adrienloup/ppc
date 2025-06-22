import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const swarmReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'UPDATE_SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.strategy,
      };
    case 'UPDATE_SWARM_GIFTS':
      console.log('UPDATE_SWARM_GIFTS');
      if (state.swarmGifts > 100 && state.harvesterDrone + state.wireDrone < 1) return state;
      return {
        ...state,
        swarmGifts: Math.min(100, state.swarmGifts + action.swarmGifts),
      };
    case 'INCREASE_DISORGANIZATION_SWARM': {
      // console.log('INCREASE_DISORGANIZATION_SWARM');
      return {
        ...state,
        disorganization: Math.min(state.disorganization + 1, 100),
      };
    }
    case 'SYNCHRONIZE_SWARM': {
      // console.log('SYNCHRONIZE_SWARM');
      if (state.funds < state.synchronizationCost) return state;
      const fundsSS = Math.max(0, state.funds - state.synchronizationCost);
      return {
        ...state,
        disorganization: 0,
        funds: fundsSS,
      };
    }
    case 'ENTERTAIN_SWARM': {
      // console.log('ENTERTAIN_SWARM');
      if (state.creativity < state.entertainmentCost) return state;
      const entertainmentCostBES = state.entertainmentCost + 1e4;
      const creativityBES = Math.max(0, state.creativity - entertainmentCostBES);
      return {
        ...state,
        creativity: creativityBES,
        entertainment: 1,
        entertainmentCost: entertainmentCostBES,
      };
    }
    case 'BORED_SWARM': {
      // console.log('BORED_SWARM');
      return {
        ...state,
        entertainment: 0,
      };
    }
    default:
      return state;
  }
};
