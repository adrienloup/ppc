import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/factory/components/backdrop/cloud/CloudComponent.module.scss';

export const CloudComponent = ({ className }: { className?: string }) => {
  return <div className={classNames([styles.cloud, className])}></div>;
};
