import type { Size } from '@/src/shared/types/size.type.ts';

export interface ProgressBar {
  className?: string;
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  size?: Size;
}
