import { type Dispatch, createContext } from 'react';
import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/mer.type.ts';

export const MerchContext = createContext<Merchandise | undefined>(undefined);
export const MerchDisContext = createContext<Dispatch<MerchandiseDispatch> | undefined>(undefined);
