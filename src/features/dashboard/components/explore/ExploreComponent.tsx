import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/dashboard/components/explore/ExploreComponent.module.scss';

export const ExploreComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={classNames([styles.explore, isActive ? styles.active : ''])}>
      <article className={styles.article}>
        <div>screen 4 top</div>
        <div style={{ height: '3000px' }}></div>
        <div>screen 4 bottom</div>
      </article>
    </div>
  );
};
