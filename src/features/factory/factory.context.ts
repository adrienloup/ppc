import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';
import { createContext, type Dispatch } from 'react';

export const FactoryContext = createContext<FactoryState | undefined>(undefined);
export const FactoryDispatchContext = createContext<Dispatch<FactoryAction>>(() => {});
