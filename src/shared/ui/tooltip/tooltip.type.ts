import type { ChildrenType } from '@/src/shared/types/children.type.ts';
import type { PositionType } from '@/src/shared/types/position.type.ts';

export interface TooltipType {
  children: ChildrenType;
  className?: string;
  position?: PositionType;
}
