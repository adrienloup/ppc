import type { AlertType } from '@/src/domains/notice/ui/alert/alert.type.ts';

export type NoticeType = AlertType[];

export type NoticeDispatchType = { type: 'ADD_ALERT'; alert: AlertType } | { type: 'REMOVE_ALERT'; id: string };
