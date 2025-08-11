import { type Dispatch, createContext } from 'react';
import type { PopinDispatch } from '@/src/domains/popin/domain/popin.type.ts';

export const PopinContext = createContext<[boolean, Dispatch<boolean>] | undefined>(undefined);
export const PopinDisContext = createContext<Dispatch<PopinDispatch> | undefined>(undefined);
