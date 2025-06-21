import type { HTMLProps } from 'react';
import type { Children } from '@/src/common/shared/types/Children.ts';

export interface Cards extends HTMLProps<HTMLDivElement> {
  children: Children;
}
