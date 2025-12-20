import { classNames } from '@/src/shared/utils/classNames.ts';
import type { DialType } from '@/src/shared/ui/dial/dial.type.ts';
import styles from '@/src/shared/ui/dial/dial.module.scss';

export const DialComponent = ({ className, children }: DialType) => {
  return <div className={classNames(styles.dial, className)}>{children}</div>;
};
