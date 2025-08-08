import { type Dispatch, createContext } from 'react';
import type { Funds, FundsDispatch } from '@/src/domains/funds/domain/funds.type.ts';

export const FundsContext = createContext<Funds | undefined>(undefined);
export const FundsDispatchContext = createContext<Dispatch<FundsDispatch> | undefined>(undefined);
