import { createContext, type Dispatch } from 'react';
import type { AccountAction, AccountState } from '@/src/domains/account/domain/account.type.ts';

export const AccountContext = createContext<AccountState | undefined>(undefined);
export const AccountDisContext = createContext<Dispatch<AccountAction> | undefined>(undefined);
