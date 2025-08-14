import { type Dispatch, createContext } from 'react';
import type { Electronic, ElectronicDispatch } from '@/src/domains/electronic/domain/elec.type.ts';

export const ElectronicContext = createContext<Electronic | undefined>(undefined);
export const ElectronicDisContext = createContext<Dispatch<ElectronicDispatch> | undefined>(undefined);
