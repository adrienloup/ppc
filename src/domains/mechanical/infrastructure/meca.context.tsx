import { type Dispatch, createContext } from 'react';
import type { MecaDispatch, Mechanical } from '@/src/domains/mechanical/domain/meca.type.ts';

export const MecaContext = createContext<Mechanical | undefined>(undefined);
export const MecaDispatchContext = createContext<Dispatch<MecaDispatch> | undefined>(undefined);
