import { classNames } from '@/src/shared/utils/classNames.ts';
import type { DialsType } from '@/src/shared/ui/dials/dials.type.ts';
import styles from '@/src/shared/ui/dials/dials.module.scss';

export const DialsComponent = ({ className, children }: DialsType) => {
  return <div className={classNames(styles.dials, className)}>{children}</div>;
};
