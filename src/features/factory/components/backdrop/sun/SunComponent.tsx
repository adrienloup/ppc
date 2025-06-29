import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/factory/components/backdrop/sun/SunComponent.module.scss';

export const SunComponent = ({ className }: { className?: string }) => {
  return <div className={classNames([styles.sun, className])}></div>;
};
