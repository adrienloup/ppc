import { type Dispatch, createContext } from 'react';
import type {
  Intelligence,
  IntelligenceDispatch,
} from '@/src/domains/intelligence/domaine/intel.type.ts';

export const IntelContext = createContext<Intelligence | undefined>(undefined);
export const IntelDisContext = createContext<Dispatch<IntelligenceDispatch> | undefined>(undefined);
