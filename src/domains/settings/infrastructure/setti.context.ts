import { type Dispatch, createContext } from 'react';
import type { SettAction, SettState } from '@/src/domains/settings/domain/account.type.ts';

export const AccContext = createContext<SettState | undefined>(undefined);
export const AccDispatchContext = createContext<Dispatch<SettAction> | undefined>(undefined);
