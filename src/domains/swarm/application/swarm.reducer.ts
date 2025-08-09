import type { Swarm, SwarmDispatch } from '@/src/domains/swarm/domain/swarm.type.ts';

export const swarmReducer = (state: Swarm, action: SwarmDispatch): Swarm => {
  switch (action.type) {
    case 'LOAD':
      return action.swarm;
    case 'SWARM_GIFTS':
      // console.log('SWARM_GIFTS');
      // if (state.swarmGifts > 100 && state.harvesterDrone + state.wireDrone < 1) return state;
      return {
        ...state,
        swarmGifts: Math.min(100, state.swarmGifts + action.swarmGifts),
      };
    case 'SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.swarmStrategy,
      };
    default:
      return state;
  }
};
