import type { StatusType } from '@/src/shared/type/Status.ts';

export interface FieldType {
  className?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  status?: StatusType;
  onChange: (e: { target: { value: string } }) => void;
}
