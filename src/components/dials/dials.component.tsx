import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Dials } from '@/src/components/dials/dials.type.ts';
import styles from '@/src/components/dials/dials.module.scss';

export const DialsComponent = ({ className, children }: Dials) => {
  return <div className={classNames([styles.dials, className])}>{children}</div>;
};
