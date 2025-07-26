export interface Swarm {
  swarmGifts: number;
  swarmStrategy: number;
}

export type SwarmDispatch = { type: 'LOAD'; swarm: Swarm } | { type: 'SET_SWARM_STRATEGY'; strategy: number };
