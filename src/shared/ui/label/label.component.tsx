import type { Label } from '@/src/shared/ui/label/label.type.ts';

export const LabelComponent = ({ className, label, ...props }: Label) => {
  return (
    <span
      className={className}
      {...props}
    >
      {label}
    </span>
  );
};
