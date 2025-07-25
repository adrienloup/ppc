import { type Dispatch, createContext } from 'react';
import type { ProductionDispatch, Production } from '@/src/domains/production/domain/prod.type.ts';

export const ProdContext = createContext<Production | undefined>(undefined);
export const ProdDisContext = createContext<Dispatch<ProductionDispatch> | undefined>(undefined);
