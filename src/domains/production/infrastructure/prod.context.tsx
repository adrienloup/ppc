import { type Dispatch, createContext } from 'react';
import type { ProdDispatch, Prod } from '@/src/domains/production/domain/prod.type.ts';

export const ProdContext = createContext<Prod | undefined>(undefined);
export const ProdDisContext = createContext<Dispatch<ProdDispatch> | undefined>(undefined);
