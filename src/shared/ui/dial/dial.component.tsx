import { memo } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Dial } from '@/src/shared/ui/dial/dial.type.ts';
import styles from '@/src/shared/ui/dial/dial.module.scss';

export const DialComponent = memo(({ className, children, ...props }: Dial) => {
  return (
    <div
      className={classNames(styles.dial, className)}
      {...props}
    >
      {children}
    </div>
  );
});
