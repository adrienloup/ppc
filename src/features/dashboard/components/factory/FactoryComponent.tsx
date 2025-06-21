import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/dashboard/components/factory/FactoryComponent.module.scss';

export const FactoryComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={classNames([styles.factory, isActive ? styles.active : ''])}>
      <div>screen 2 factory</div>
    </div>
  );
};
