import { createContext, type Dispatch } from 'react';
import type { ProdAction, ProdState } from '@/src/domains/production/exp.type.ts';

export const ProdContext = createContext<ProdState | undefined>(undefined);
export const ProdDisContext = createContext<Dispatch<ProdAction> | undefined>(undefined);
