import type { HTMLProps } from 'react';
import type { Children } from '@/src/shared/types/children.type.ts';

export interface Cards extends HTMLProps<HTMLDivElement> {
  children: Children;
}
