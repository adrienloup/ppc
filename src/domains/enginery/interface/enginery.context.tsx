import { type Dispatch, createContext } from 'react';
import type { EngineryDispatchType, EngineryType } from '@/src/domains/enginery/application/enginery.type.ts';

export const EngineryContext = createContext<EngineryType | undefined>(undefined);
export const EngineryDispatchContext = createContext<Dispatch<EngineryDispatchType> | undefined>(undefined);
