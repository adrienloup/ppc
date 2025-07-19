import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Dials } from '@/src/shared/ui/dials/dials.type.ts';
import styles from '@/src/shared/ui/dials/dials.module.scss';

export const DialsComponent = ({ className, children, disabled }: Dials) => {
  return (
    <div className={classNames([styles.dials, disabled ? styles.disabled : '', className])}>{children}</div>
  );
};
