import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Turban } from '@/src/common/components/turban/Turban.ts';
import styles from '@/src/common/components/turban/TurbanComponent.module.scss';

export const TurbanComponent = ({ children, className, ...props }: Turban) => {
  return (
    <div
      className={classNames([styles.turban, className])}
      {...props}
    >
      {children}
    </div>
  );
};
