import type { StatusType } from '@/src/shared/type/Status.ts';

export interface NoticeType {
  id?: string;
  remove?: () => void;
  status?: StatusType;
  text: string;
  timeout?: number;
}
