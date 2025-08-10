import type { Children } from '@/src/shared/types/children.type.ts';

export interface Popin {
  children: Children;
  onRemove: () => void;
}
