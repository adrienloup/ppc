import type { Children } from '@/src/shared/types/children.type.ts';

export interface FormField {
  children: Children;
  className?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
}
