import { createContext, type Dispatch } from 'react';
import type { MachAction, MachineryState } from '@/src/domains/test/machinery/machinery.type.ts';

export const MachineryContext = createContext<MachineryState | undefined>(undefined);
export const MachineryDisContext = createContext<Dispatch<MachAction> | undefined>(undefined);
