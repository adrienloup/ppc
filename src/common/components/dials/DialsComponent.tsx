import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Dials } from '@/src/common/components/dials/dials.ts';
import styles from '@/src/common/components/dials/DialsComponent.module.scss';

export const DialsComponent = ({ children, direction = 'column', className, styleCss }: Dials) => {
  return (
    <div
      className={classNames([styles.dials, className])}
      style={{ flexDirection: direction, ...styleCss }}
    >
      {children}
    </div>
  );
};
