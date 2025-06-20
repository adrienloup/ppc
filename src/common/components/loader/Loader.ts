import type { Size } from '@/src/common/shared/types/size.ts';

export interface Loader {
  className?: string;
  duration?: number;
  size?: Size;
}
