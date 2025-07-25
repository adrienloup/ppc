import { type Dispatch, createContext } from 'react';
import type { Business, BusinessDispatch } from '@/src/domains/business/domaine/business.type.ts';

export const BusiContext = createContext<Business | undefined>(undefined);
export const BusiDisContext = createContext<Dispatch<BusinessDispatch> | undefined>(undefined);
