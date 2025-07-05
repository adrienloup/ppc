import { createContext, type Dispatch } from 'react';
import type { NotifAction, NotifState } from '@/src/features/notification/notif.type.ts';

export const NotifContext = createContext<[NotifState, Dispatch<NotifAction>] | undefined>(undefined);
