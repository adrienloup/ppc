import type { Button } from '@/src/components/button/button.type.ts';

export interface Clicker extends Button<HTMLButtonElement> {
  value: number;
  prefix: string;
  onClick: () => void;
}
