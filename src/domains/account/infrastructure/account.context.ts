import { type Dispatch, createContext } from 'react';
import type { AccountAction, AccountState } from '@/src/domains/account/domain/account.type.ts';

export const AccountContext = createContext<AccountState | undefined>(undefined);
export const AccountDispatchContext = createContext<Dispatch<AccountAction> | undefined>(undefined);
