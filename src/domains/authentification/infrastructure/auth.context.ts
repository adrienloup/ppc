import { type Dispatch, createContext } from 'react';
import type { AuthDispatch, Auth } from '@/src/domains/authentification/domain/auth.type.ts';

export const AuthContext = createContext<Auth | undefined>(undefined);
export const AuthDisContext = createContext<Dispatch<AuthDispatch> | undefined>(undefined);
