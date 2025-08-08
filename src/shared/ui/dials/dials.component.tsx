import type { Dials } from '@/src/shared/ui/dials/dials.type.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/dials/dials.module.scss';

export const DialsComponent = ({ className, children, disabled, ...props }: Dials) => {
  return (
    <div
      className={classNames(styles.dials, className, disabled ? styles.disabled : '')}
      {...props}
    >
      {children}
    </div>
  );
};
