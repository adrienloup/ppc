import { type Dispatch, createContext } from 'react';
import type { Intelligence, IntelDispatch } from '@/src/domains/intelligence/domain/intel.type.ts';

export const IntelContext = createContext<Intelligence | undefined>(undefined);
export const IntelDisContext = createContext<Dispatch<IntelDispatch> | undefined>(undefined);
