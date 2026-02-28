import { type Dispatch, createContext } from 'react';
import type { SettingsDispatchType, SettingsType } from '@/src/context/settings/type/Settings.ts';

export const SettingsContext = createContext<SettingsType | undefined>(undefined);
export const SettingsDispatchContext = createContext<Dispatch<SettingsDispatchType> | undefined>(undefined);
