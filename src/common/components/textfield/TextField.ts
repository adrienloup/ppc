import type { Status } from '@/src/common/shared/types/Status.ts';

export interface TextField {
  className?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  status?: Status;
  onChange: (e: { target: { value: string } }) => void;
}
