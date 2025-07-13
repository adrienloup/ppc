import { createContext, type Dispatch } from 'react';
import type { MachAction, MachState } from '@/src/domains/test/machinery/mach.type.ts';

export const MachContext = createContext<MachState | undefined>(undefined);
export const MachDispatchContext = createContext<Dispatch<MachAction> | undefined>(undefined);
