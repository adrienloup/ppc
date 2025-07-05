import type { HTMLProps } from 'react';
import type { ChildrenType } from '../../shared/types/children.type.ts';

export interface CardType extends HTMLProps<HTMLDivElement> {
  children: ChildrenType;
}
