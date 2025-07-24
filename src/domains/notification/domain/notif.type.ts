import type { Status } from '@/src/shared/types/status.type.ts';

export interface Notif {
  id: string;
  text: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}

export type NotifState = Notif[] | null;

export type NotifAction = { type: 'ADD_NOTIF'; notif: Notif } | { type: 'REMOVE_NOTIF'; id: string };
