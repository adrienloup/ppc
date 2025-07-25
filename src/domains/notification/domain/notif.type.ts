import type { Alert } from '@/src/domains/notification/interfaces/ui/alert/alert.type.ts';

export type Notif = Alert[];

export type NotifDispatch = { type: 'ADD'; alert: Alert } | { type: 'REMOVE'; id: string };
