import { type Dispatch, createContext } from 'react';
import type {
  MerchandisingAction,
  MerchandisingState,
} from '@/src/domains/merchandising/domaine/merc.type.ts';

export const MerchandisingContext = createContext<MerchandisingState | undefined>(undefined);
export const MerchandisingDispatchContext = createContext<Dispatch<MerchandisingAction> | undefined>(
  undefined
);
