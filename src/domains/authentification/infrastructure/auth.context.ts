import { createContext } from 'react';
import type { AuthDispatch, AuthState } from '@/src/domains/authentification/domain/auth.type.ts';

export const AuthContext = createContext<AuthState | undefined>(undefined);
export const AuthDispatchContext = createContext<AuthDispatch | undefined>(undefined);
