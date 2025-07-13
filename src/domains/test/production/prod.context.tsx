import { createContext, type Dispatch } from 'react';
import type { ProdAction, ProdState } from '@/src/domains/test/production/prod.type.ts';

export const ProdContext = createContext<ProdState | undefined>(undefined);
export const ProdDispatchContext = createContext<Dispatch<ProdAction> | undefined>(undefined);
