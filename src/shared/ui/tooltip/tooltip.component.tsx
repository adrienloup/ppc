import { classNames } from '@/src/shared/utils/classNames.ts';
import type { TooltipType } from '@/src/shared/ui/tooltip/tooltip.type.ts';
import styles from '@/src/shared/ui/tooltip/tooltip.module.scss';

export const TooltipComponent = ({ className, children, position = 'left-start' }: TooltipType) => {
  return (
    <div
      className={classNames(styles.tooltip, styles[position], className)}
      role="tooltip"
    >
      {children}
    </div>
  );
};
