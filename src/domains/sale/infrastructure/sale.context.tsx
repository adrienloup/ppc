import { type Dispatch, createContext } from 'react';
import type { SaleAction, SaleState } from '@/src/domains/sale/domain/sale.type.ts';

export const SaleContext = createContext<SaleState | undefined>(undefined);
export const SaleDispatchContext = createContext<Dispatch<SaleAction> | undefined>(undefined);
