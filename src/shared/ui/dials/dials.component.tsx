import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Dials } from '@/src/shared/ui/dials/dials.type.ts';
import styles from '@/src/shared/ui/dials/dials.module.scss';

export const DialsComponent = ({ className, children, disabled, onAnimationEnd, ...props }: Dials) => {
  return (
    <div
      className={classNames(styles.dials, className, disabled ? styles.disabled : '')}
      onAnimationEnd={onAnimationEnd}
      {...props}
    >
      {children}
    </div>
  );
};
