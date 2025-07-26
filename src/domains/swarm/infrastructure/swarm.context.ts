import { type Dispatch, createContext } from 'react';
import type { Swarm, SwarmDispatch } from '@/src/domains/swarm/domain/swarm.type.ts';

export const SwarmContext = createContext<Swarm | undefined>(undefined);
export const SwarmDisContext = createContext<Dispatch<SwarmDispatch> | undefined>(undefined);
