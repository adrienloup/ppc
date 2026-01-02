import type { MouseEvent, RefObject } from 'react';
import type { ButtonType } from '@/src/shared/ui/button/button.type.ts';

export interface ReaderType extends ButtonType<HTMLButtonElement> {
  innerRef?: RefObject<HTMLButtonElement | null>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  src: string;
}
