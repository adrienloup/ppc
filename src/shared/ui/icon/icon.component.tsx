import { classNames } from '@/src/shared/utils/classNames.ts';
import type { IconType } from '@/src/shared/ui/icon/icon.type.ts';
import styles from '@/src/shared/ui/icon/icon.module.scss';

export const IconComponent = ({ className, icon, ...props }: IconType) => {
  return (
    <span
      className={classNames(styles.icon, className)}
      aria-hidden={false}
      {...props}
    >
      {icon}
    </span>
  );
};
