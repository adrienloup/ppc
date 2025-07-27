import type { Notif } from '@/src/domains/notification/interfaces/ui/notif/notif.type.ts';

export type NotifState = Notif[];

export type NotifDispatch = { type: 'ADD'; notif: Notif } | { type: 'REMOVE'; id: string };
