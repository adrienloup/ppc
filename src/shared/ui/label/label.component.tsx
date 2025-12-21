import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ValueType } from '@/src/shared/ui/label/label.type.ts';
import styles from '@/src/shared/ui/label/label.module.scss';

export const LabelComponent = ({ children, className }: ValueType) => {
  return <span className={classNames(styles.label, className)}>{children}</span>;
};
