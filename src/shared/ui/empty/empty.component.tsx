import type { Empty } from '@/src/shared/ui/empty/empty.type.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/empty/empty.module.scss';

export const EmptyComponent = ({ className }: Empty) => {
  return <span className={classNames(styles.empty, className)}>app.empty</span>;
};
