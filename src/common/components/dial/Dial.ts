import type { CSSProperties } from 'react';
import type { Number } from '@/src/common/components/number/Number.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';

export interface Dial extends Number {
  tile?: Children;
  label: string;
  styleProp?: CSSProperties;
}
