import { createContext, type Dispatch } from 'react';
import type { AuthAction, AuthState } from '@/src/features/authentification/auth.type.ts';

export const AuthContext = createContext<AuthState | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch<AuthAction>>(() => {});
