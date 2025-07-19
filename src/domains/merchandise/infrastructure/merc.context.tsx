import { type Dispatch, createContext } from 'react';
import type { MerchandiseAction, MerchandiseState } from '@/src/domains/merchandise/domaine/merc.type.ts';

export const MerchandiseContext = createContext<MerchandiseState | undefined>(undefined);
export const MerchandiseDispatchContext = createContext<Dispatch<MerchandiseAction> | undefined>(undefined);
