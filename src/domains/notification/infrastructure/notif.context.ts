import { type Dispatch, createContext } from 'react';
import type { NotifDispatch, Notif } from '@/src/domains/notification/domain/notif.type.ts';

export const NotifContext = createContext<Notif | undefined>(undefined);
export const NotifDisContext = createContext<Dispatch<NotifDispatch> | undefined>(undefined);
