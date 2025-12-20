import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export interface TitleType {
  children: ChildrenType;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
