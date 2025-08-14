import { type Dispatch, createContext } from 'react';
import type { Matter, MatterDispatch } from '@/src/domains/matter/domain/matter.type.ts';

export const MatterContext = createContext<Matter | undefined>(undefined);
export const MatterDispatchContext = createContext<Dispatch<MatterDispatch> | undefined>(undefined);
