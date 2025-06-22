import type { Size } from '@/src/common/shared/types/Size.ts';

export interface Loader {
  className?: string;
  duration?: number;
  size?: Size;
}
