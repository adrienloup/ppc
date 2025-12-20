import { type Dispatch, createContext } from 'react';
import type { SupplyDispatchType, SupplyType } from '@/src/domains/supply/application/supply.type.ts';

export const SupplyContext = createContext<SupplyType | undefined>(undefined);
export const SupplyDispatchContext = createContext<Dispatch<SupplyDispatchType> | undefined>(undefined);
