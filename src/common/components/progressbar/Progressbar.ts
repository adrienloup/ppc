import type { Size } from '@/src/common/shared/types/size.ts';
import type { HTMLProps } from 'react';

export interface Progressbar extends Omit<HTMLProps<HTMLElement>, 'size'> {
  valueNow: number;
  valueMin?: number;
  valueMax?: number;
  size?: Size;
}
