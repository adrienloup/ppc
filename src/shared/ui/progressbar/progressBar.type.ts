import type { SizeType } from '@/src/shared/types/size.type.ts';

export interface ProgressBarType {
  className?: string;
  size?: SizeType;
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  completed?: boolean;
}
