import { createContext, type Dispatch } from 'react';
import type { ResoAction, ResoState } from '@/src/domains/test/resources/reso.type.ts';

export const ResoContext = createContext<ResoState | undefined>(undefined);
export const ResoDisContext = createContext<Dispatch<ResoAction> | undefined>(undefined);
