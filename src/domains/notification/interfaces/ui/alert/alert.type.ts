import type { Status } from '@/src/shared/types/status.type.ts';

export interface Alert {
  id: string;
  text: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}
