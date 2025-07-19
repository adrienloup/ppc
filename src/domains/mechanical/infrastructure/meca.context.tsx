import { type Dispatch, createContext } from 'react';
import type { MecaAction, MecaState } from '@/src/domains/mechanical/domain/meca.type.ts';

export const MecaContext = createContext<MecaState | undefined>(undefined);
export const MecaDispatchContext = createContext<Dispatch<MecaAction> | undefined>(undefined);
