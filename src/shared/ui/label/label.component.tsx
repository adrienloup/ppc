import type { Label } from '@/src/shared/ui/label/label.type.ts';

export const LabelComponent = ({ className, label }: Label) => {
  return <span className={className}>{label}</span>;
};
