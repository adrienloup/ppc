import type { Status } from '@/src/common/shared/types/Status.ts';

export interface Alert {
  text: string;
  id: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}
