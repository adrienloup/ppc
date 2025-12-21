import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export interface GroupType {
  children: ChildrenType;
  className?: string;
  direction?: 'row' | 'column';
}
