import type { StatusType } from '@/src/shared/types/status.type.ts';

export interface NoticeType {
  id?: string;
  remove?: () => void;
  status?: StatusType;
  text: string;
  timeout?: number;
}
