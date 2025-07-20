import { type Dispatch, createContext } from 'react';
import type { MercAction, MercState } from '@/src/domains/merchandising/domaine/merc.type.ts';

export const MercContext = createContext<MercState | undefined>(undefined);
export const MercDispatchContext = createContext<Dispatch<MercAction> | undefined>(undefined);
