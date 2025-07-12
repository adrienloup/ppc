import type { HTMLProps } from 'react';

export interface Banner extends HTMLProps<HTMLDivElement> {
  title: string;
  button?: string;
}
