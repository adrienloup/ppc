import type { SizeType } from '@/src/shared/types/size.type.ts';

export interface ProgressType {
  className?: string;
  duration?: number;
  label: string;
  size?: SizeType;
}
