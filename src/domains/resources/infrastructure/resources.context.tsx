import { type Dispatch, createContext } from 'react';
import type { Resources, ResourcesDispatch } from '@/src/domains/resources/domain/resources.type.ts';

export const ResourcesContext = createContext<Resources | undefined>(undefined);
export const ResourcesDisContext = createContext<Dispatch<ResourcesDispatch> | undefined>(undefined);
