import { type Dispatch, createContext } from 'react';
import type { Popin, PopinAction } from '@/src/domains/popin/domain/popin.type.ts';

export const PopinContext = createContext<[Popin, Dispatch<Popin>] | undefined>(undefined);
export const PopinActionContext = createContext<Dispatch<PopinAction> | undefined>(undefined);
