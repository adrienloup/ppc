import type { Status } from '@/src/shared/types/status.type.ts';

export interface Notif {
  id: string;
  text: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  onRemove?: () => void;
}
