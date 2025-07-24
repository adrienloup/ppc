import { type Dispatch, createContext } from 'react';
import type { AccountAction, AccountState } from '@/src/domains/account/domain/account.type.ts';

export const AccContext = createContext<AccountState | undefined>(undefined);
export const AccDispatchContext = createContext<Dispatch<AccountAction> | undefined>(undefined);
