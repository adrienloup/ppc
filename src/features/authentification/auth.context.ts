import type { Auth } from '@/src/features/authentification/auth.type.ts';
import { createContext } from 'react';

export const AuthContext = createContext<Auth | undefined>(undefined);
