import type { ValueType } from '@/src/components/value/value.type.ts';

export const ValueComponent = ({ className, value }: ValueType) => {
  return <span className={className}>{value}</span>;
};
