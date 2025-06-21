import type { HTMLProps } from 'react';
import type { Children } from '@/src/common/shared/types/Children.ts';

export interface Card extends HTMLProps<HTMLDivElement> {
  children: Children;
}
