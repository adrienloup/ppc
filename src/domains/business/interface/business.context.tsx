import { type Dispatch, createContext } from 'react';
import type { BusinessDispatchType, BusinessType } from '@/src/domains/business/application/business.type.ts';

export const BusinessContext = createContext<BusinessType | undefined>(undefined);
export const BusinessDispatchContext = createContext<Dispatch<BusinessDispatchType> | undefined>(undefined);
