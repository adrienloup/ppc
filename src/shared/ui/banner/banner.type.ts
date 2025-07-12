import type { HTMLProps } from 'react';
import type { Children } from '@/src/shared/types/children.type.ts';

export interface Banner extends HTMLProps<HTMLDivElement> {
  children: Children;
}
