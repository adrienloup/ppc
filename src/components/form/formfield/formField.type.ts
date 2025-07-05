import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export interface FormFieldType {
  children: ChildrenType;
  className?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
}
