import { type Dispatch, createContext } from 'react';
import type { Sale, SaleDispatch } from '@/src/domains/sale/domaine/sale.type.ts';

export const SaleContext = createContext<Sale | undefined>(undefined);
export const SaleDisContext = createContext<Dispatch<SaleDispatch> | undefined>(undefined);
