import type { Swarm, SwarmDispatch } from '@/src/domains/swarm/domain/swarm.type.ts';

export const swarmReducer = (state: Swarm, action: SwarmDispatch): Swarm => {
  switch (action.type) {
    case 'LOAD':
      return action.swarm;
    case 'SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.swarmStrategy,
      };
    default:
      return state;
  }
};
