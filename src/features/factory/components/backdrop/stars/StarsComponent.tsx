import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Stars } from '@/src/features/factory/components/backdrop/stars/Stars.ts';
import styles from '@/src/features/factory/components/backdrop/stars/StarsComponent.module.scss';

export const StarsComponent = ({ className, children }: Stars) => {
  return <div className={classNames([styles.stars, className])}>{children}</div>;
};
