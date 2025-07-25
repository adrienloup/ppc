import { type Dispatch, createContext } from 'react';
import type { SettingsDispatch, Settings } from '@/src/domains/settings/domain/setti.type.ts';

export const SettiContext = createContext<Settings | undefined>(undefined);
export const SettiDisContext = createContext<Dispatch<SettingsDispatch> | undefined>(undefined);
