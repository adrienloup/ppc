import { type Dispatch, createContext } from 'react';
import type { IT, ITDispatch } from '@/src/domains/it/domain/it.type.ts';

export const ITContext = createContext<IT | undefined>(undefined);
export const ITDispatchContext = createContext<Dispatch<ITDispatch> | undefined>(undefined);
