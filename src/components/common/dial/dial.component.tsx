import { memo } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Dial } from '@/src/components/common/dial/dial.type.ts';
import styles from '@/src/components/common/dial/dial.module.scss';

export const DialComponent = memo(({ className, children }: Dial) => {
  return <div className={classNames([styles.dial, className])}>{children}</div>;
});
