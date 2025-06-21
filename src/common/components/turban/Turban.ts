import type { HTMLProps } from 'react';
import type { Children } from '@/src/common/shared/types/children.ts';

export interface Turban extends HTMLProps<HTMLDivElement> {
  children: Children;
}
