import type { Highlight } from '@/src/shared/ui/highlight/highlight.type.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/highlight/highlight.module.scss';

export const HighlightComponent = ({ className, children }: Highlight) => {
  return <div className={classNames(styles.highlight, className)}>{children}</div>;
};
