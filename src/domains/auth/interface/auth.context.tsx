import { type Dispatch, createContext } from 'react';
import type { AuthDispatchType, AuthType } from '@/src/domains/auth/application/auth.type.ts';

export const AuthContext = createContext<AuthType | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch<AuthDispatchType> | undefined>(undefined);
