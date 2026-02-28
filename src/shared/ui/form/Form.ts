import type { ChildrenType } from '@/src/shared/type/Children.ts';

export interface FormType {
  children: ChildrenType;
  className?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
}
