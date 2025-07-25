import { type Dispatch, createContext } from 'react';
import type { Intellect, IntellectDispatch } from '@/src/domains/intellect/domaine/int.type.ts';

export const IntContext = createContext<Intellect | undefined>(undefined);
export const IntDisContext = createContext<Dispatch<IntellectDispatch> | undefined>(undefined);
