import { type Dispatch, createContext } from 'react';
import type { AccountDispatchType, AccountType } from '@/src/context/account/Account.ts';

export const AccountContext = createContext<AccountType | undefined>(undefined);
export const AccountDispatchContext = createContext<Dispatch<AccountDispatchType> | undefined>(undefined);
