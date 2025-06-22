import { createContext, type Dispatch } from 'react';
import type {
  Authentification,
  AuthentificationDispatch,
} from '@/src/features/authentification/domain/Authentification.ts';

export const AuthentificationContext = createContext<
  [Authentification, Dispatch<AuthentificationDispatch>] | undefined
>(undefined);
