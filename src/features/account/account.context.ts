import type { AccountAction, AccountState } from '@/src/features/account/account.type.ts';
import { createContext, type Dispatch } from 'react';

export const AccountContext = createContext<AccountState | undefined>(undefined);
export const AccountDispatchContext = createContext<Dispatch<AccountAction>>(() => {});
