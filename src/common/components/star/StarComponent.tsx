import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Star } from '@/src/common/components/star/Star.ts';
import styles from '@/src/common/components/star/StarComponent.module.scss';

export const StarComponent = ({ className }: Star) => {
  return <div className={classNames([styles.star, className ? className : ''])} />;
};
