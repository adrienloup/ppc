import { createContext, type Dispatch } from 'react';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { FactoryAction } from '@/src/domains/factory/domain/factoryAction.type.ts';

export const FactoryContext = createContext<FactoryState | undefined>(undefined);
export const FactoryDispatchContext = createContext<Dispatch<FactoryAction>>(() => {});
