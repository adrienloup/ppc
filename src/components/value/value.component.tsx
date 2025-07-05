import type { Value } from '@/src/components/value/value.type.ts';

export const ValueComponent = ({ className, value }: Value) => {
  return <span className={className}>{value}</span>;
};
