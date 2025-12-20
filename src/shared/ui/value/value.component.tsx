import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ValueType } from '@/src/shared/ui/value/value.type.ts';
import styles from '@/src/shared/ui/value/value.module.scss';

export const ValueComponent = ({ children, className }: ValueType) => {
  return <span className={classNames(styles.value, className)}>{children}</span>;
};
