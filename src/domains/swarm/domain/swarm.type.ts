export interface Swarm {
  swarmEntertaining: number;
  swarmEntertainingCost: number;
  swarmGifts: number;
  swarmStrategy: number;
}

export type SwarmDispatch =
  | { type: 'LOAD'; swarm: Swarm }
  | { type: 'SWARM_GIFTS'; swarmGifts: number }
  | { type: 'SWARM_STRATEGY'; swarmStrategy: number };
