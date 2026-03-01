import type { CaseType } from '@/src/shared/ui/case/Case.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/case/Case.module.scss';

export const Case = ({ children, className }: CaseType) => {
  return <div className={classNames(styles.case, className)}>{children}</div>;
};
