import type { AuthType } from '@/src/features/authentification/auth.type.ts';
import { createContext } from 'react';

export const AuthContext = createContext<AuthType | undefined>(undefined);
