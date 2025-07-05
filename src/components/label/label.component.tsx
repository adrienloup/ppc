import type { LabelType } from '@/src/components/label/label.type.ts';

export const LabelComponent = ({ className, label }: LabelType) => {
  return <span className={className}>{label}</span>;
};
