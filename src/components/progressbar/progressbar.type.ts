import type { SizeType } from '@/src/shared/types/size.type.ts';

export interface ProgressbarType {
  className?: string;
  valueNow: number;
  valueMin: number;
  valueMax: number;
  size?: SizeType;
}
