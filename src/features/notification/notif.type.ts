import type { Status } from '@/src/shared/types/status.type.ts';

export interface Notif {
  id: string;
  text: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}

export type NotifState = Notif[];

export type NotifAction = { type: 'ADD'; notif: Notif } | { type: 'REMOVE'; id: string };
