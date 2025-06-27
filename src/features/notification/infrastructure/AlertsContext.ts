import { createContext, type Dispatch } from 'react';
import type { AlertsDispatch, Alerts } from '@/src/features/notification/domain/Alerts.ts';

export const AlertsContext = createContext<Alerts | undefined>(undefined);
export const AlertsDispatchContext = createContext<Dispatch<AlertsDispatch>>(() => {});
