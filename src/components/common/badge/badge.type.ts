import type { Status } from '@/src/shared/types/status.type.ts';
import type { Number } from '@/src/components/common/number/number.type.ts';

export interface Badge extends Number {
  prefix?: string;
  label?: string;
  status?: Status;
}
