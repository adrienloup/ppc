import type { CSSProperties } from 'react';
import type { Children } from '@/src/shared/types/children.type.ts';

export interface Dials {
  children: Children;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties | undefined;
}
