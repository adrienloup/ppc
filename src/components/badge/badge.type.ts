import type { Status } from '@/src/shared/types/status.type.ts';

export interface Badge {
  className?: string;
  prefix?: string;
  value: number;
  status?: Status;
}
