import type { Alert } from '@/src/features/notification/domain/Alert.ts';

export type Alerts = Alert[];

export type AlertsDispatch =
  | { type: 'ADD_ALERT'; alert: Alert }
  | { type: 'REMOVE_ALERT'; id: string };
