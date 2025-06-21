import type { CSSProperties } from 'react';
import type { Children } from '@/src/common/shared/types/Children.ts';

export interface Dial {
  tile?: Children;
  label: string;
  stringValue?: string;
  styleCss?: CSSProperties;
}
