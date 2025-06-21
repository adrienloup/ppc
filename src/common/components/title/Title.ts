import type { HTMLProps } from 'react';
import type { Children } from '@/src/common/shared/types/Children.ts';

export interface Title extends HTMLProps<HTMLElement> {
  children: Children;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
