import { type Dispatch, createContext } from 'react';
import type { Merchandise, MerchandiseDispatch } from '@/src/domains/merchandise/domain/mer.type.ts';

export const MerContext = createContext<Merchandise | undefined>(undefined);
export const MerDisContext = createContext<Dispatch<MerchandiseDispatch> | undefined>(undefined);
