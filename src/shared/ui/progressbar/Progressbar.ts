import type { SizeType } from '@/src/shared/type/Size.ts';

export interface ProgressbarType {
  className?: string;
  size?: SizeType;
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  completed?: boolean;
}
