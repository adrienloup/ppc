import { type Dispatch, createContext } from 'react';
import type { ProdAction, ProdState } from '@/src/domains/production/domain/prod.type.ts';

export const ProdContext = createContext<ProdState | undefined>(undefined);
export const ProdDispatchContext = createContext<Dispatch<ProdAction> | undefined>(undefined);
