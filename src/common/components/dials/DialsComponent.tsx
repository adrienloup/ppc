import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Dials } from '@/src/common/components/dials/Dials.ts';
import styles from '@/src/common/components/dials/DialsComponent.module.scss';

export const DialsComponent = ({ children, direction = 'column', className, styleProp }: Dials) => {
  return (
    <div
      className={classNames([styles.dials, className])}
      style={{ flexDirection: direction, ...styleProp }}
    >
      {children}
    </div>
  );
};
