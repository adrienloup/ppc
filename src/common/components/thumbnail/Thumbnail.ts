import type { Status } from '@/src/common/shared/types/Status.ts';

export interface Thumbnail {
  className?: string;
  label?: string;
  value?: number;
  status?: Status;
}
