import type { MouseEvent, RefObject } from 'react';
import type { ButtonType } from '@/src/shared/ui/button/button.type.ts';

export interface ReaderType extends ButtonType<HTMLButtonElement> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  innerRef?: RefObject<HTMLButtonElement | null>;
  sound: string;
}
