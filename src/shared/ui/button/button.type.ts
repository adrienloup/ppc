import type { ButtonHTMLAttributes, LinkHTMLAttributes, MouseEventHandler, RefObject } from 'react';

type ButtonAttributes<T> = ButtonHTMLAttributes<T> & LinkHTMLAttributes<T>;

export interface ButtonType<T> extends ButtonAttributes<T> {
  disabled?: boolean;
  href?: string;
  innerRef?: RefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<T>;
  to?: string;
}
