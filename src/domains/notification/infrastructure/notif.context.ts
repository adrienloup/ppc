import { type Dispatch, createContext } from 'react';
import type { NotifDispatch, NotifState } from '@/src/domains/notification/domain/notif.type.ts';

export const NotifContext = createContext<NotifState | undefined>(undefined);
export const NotifDisContext = createContext<Dispatch<NotifDispatch> | undefined>(undefined);
