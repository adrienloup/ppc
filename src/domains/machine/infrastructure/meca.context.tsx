import { type Dispatch, createContext } from 'react';
import type { MachineDispatch, Machine } from '@/src/domains/machine/domain/meca.type.ts';

export const MecaContext = createContext<Machine | undefined>(undefined);
export const MecaDispatchContext = createContext<Dispatch<MachineDispatch> | undefined>(undefined);
