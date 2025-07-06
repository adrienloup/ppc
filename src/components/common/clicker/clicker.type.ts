import type { Button } from '@/src/components/common/button/button.type.ts';

export interface Clicker extends Button<HTMLButtonElement> {
  value: number;
  decimal?: boolean;
  prefix: string;
  onClick: () => void;
}
