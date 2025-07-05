import { classNames } from '@/src/shared/utils/classNames.ts';
import type { DialsType } from '@/src/components/dials/dials.type.ts';
import styles from '@/src/components/dials/dials.module.scss';

export const DialsComponent = ({ className, children }: DialsType) => {
  return <div className={classNames([styles.dials, className])}>{children}</div>;
};
