import { classNames } from '@/src/shared/utils/classNames.ts';
import type { GroupType } from '@/src/shared/ui/group/group.type.ts';
import styles from '@/src/shared/ui/group/group.module.scss';

export const GroupComponent = ({ children, className, direction = 'row' }: GroupType) => {
  return <span className={classNames(styles.group, styles[direction], className)}>{children}</span>;
};
