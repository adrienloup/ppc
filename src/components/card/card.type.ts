import type { HTMLProps } from 'react';
import type { Children } from '../../shared/types/children.type.ts';

export interface Card extends HTMLProps<HTMLDivElement> {
  children: Children;
}
