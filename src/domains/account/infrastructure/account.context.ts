import { createContext, type Dispatch } from 'react';
import type { AccAction, AccState } from '@/src/domains/account/domain/account.type.ts';

export const AccContext = createContext<AccState | undefined>(undefined);
export const AccDisContext = createContext<Dispatch<AccAction> | undefined>(undefined);
