import type { HTMLProps } from 'react';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export interface CardsType extends HTMLProps<HTMLDivElement> {
  children: ChildrenType;
}
