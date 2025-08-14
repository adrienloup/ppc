export interface Swarm {
  swarmEntertaining: number;
  swarmEntertainingCost: number;
  swarmStrategy: number;
}

export type SwarmDispatch = { type: 'LOAD'; swarm: Swarm } | { type: 'SWARM_STRATEGY'; swarmStrategy: number };
