import type { StatusType } from '@/src/shared/types/status.type.ts';

export interface AlertType {
  id: string;
  text: string;
  timeout?: number;
  status?: StatusType;
  close?: boolean;
  onRemove?: () => void;
}
