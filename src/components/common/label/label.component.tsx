import type { Label } from '@/src/components/common/label/label.type.ts';

export const LabelComponent = ({ className, label }: Label) => {
  return <span className={className}>{label}</span>;
};
