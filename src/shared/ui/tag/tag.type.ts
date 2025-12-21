import type { ChildrenType } from '@/src/shared/types/children.type.ts';
import type { ColorType } from '@/src/shared/types/color.type.ts';

export interface TagType {
  children: ChildrenType;
  className?: string;
  color?: ColorType;
  icon?: string;
}
