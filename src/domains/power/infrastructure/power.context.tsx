import { type Dispatch, createContext } from 'react';
import type { Power, PowerDispatch } from '@/src/domains/power/domain/power.type.ts';

export const PowerContext = createContext<Power | undefined>(undefined);
export const PowerDispatchContext = createContext<Dispatch<PowerDispatch> | undefined>(undefined);
