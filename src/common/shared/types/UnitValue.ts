import type { Factory } from '@/src/features/factory/domain/Factory.ts';

type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export interface UnitValue {
  unit: NumberKeys<Factory>;
  value: number;
}
