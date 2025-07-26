import type { CSSProperties } from 'react';
import type { Children } from '@/src/shared/types/children.type.ts';

export interface Dial {
  children: Children;
  className?: string;
  style?: CSSProperties | undefined;
}
