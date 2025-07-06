import type { Children } from '@/src/shared/types/children.type.ts';

export interface Expand {
  title: Children;
  content: Children;
  open?: boolean;
  toggle?: () => void;
}
