import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Stars } from '@/src/common/components/stars/Stars.ts';
import styles from '@/src/common/components/stars/StarsComponent.module.scss';

export const StarsComponent = ({ className, children }: Stars) => {
  return <div className={classNames([styles.stars, className ? className : ''])}>{children}</div>;
};
