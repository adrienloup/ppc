import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/factory/components/backdrop/star/StarComponent.module.scss';

export const StarComponent = ({ className }: { className?: string }) => {
  return <div className={classNames([styles.star, className])}></div>;
};
