import type { HTMLProps } from 'react';

export interface Label extends HTMLProps<HTMLDivElement> {
  className?: string;
  label: string;
}
