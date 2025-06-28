import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Icon } from '@/src/common/components/icon/Icon.ts';
import styles from '@/src/common/components/icon/IconComponent.module.scss';

export const IconComponent = ({ icon, className, ...props }: Icon) => {
  return (
    <span
      aria-hidden={false}
      className={classNames([styles.icon, className])}
      {...props}
    >
      {icon}
    </span>
  );
};
