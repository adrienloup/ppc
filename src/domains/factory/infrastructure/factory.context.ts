import { createContext, type Dispatch } from 'react';
import type { FactoryAction, FactoryState } from '@/src/domains/factory/domain/factory.type.ts';

export const FactoryContext = createContext<FactoryState | undefined>(undefined);
export const FactoryDispatchContext = createContext<Dispatch<FactoryAction>>(() => {});
