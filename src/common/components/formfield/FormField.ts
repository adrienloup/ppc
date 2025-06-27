import type { Children } from '@/src/common/shared/types/Children.ts';

export interface FormField {
  children: Children;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  className?: string;
}
