import type { Size } from '@/src/shared/types/size.type.ts';

export interface Loader {
  className?: string;
  duration?: number;
  size?: Size;
}
