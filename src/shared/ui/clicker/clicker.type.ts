import type { MouseEvent } from 'react';
import type { ButtonType } from '@/src/shared/ui/button/button.type.ts';

export interface ClickerType extends ButtonType<HTMLButtonElement> {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  value: string;
}
