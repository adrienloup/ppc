import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/dashboard/components/profile/ProfileComponent.module.scss';

export const ProfileComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={classNames([styles.profile, isActive ? styles.active : ''])}>
      <div className={styles.inner}>screen 1</div>
      <div className={styles.planet}></div>
      <div className={styles.stars}>
        <div className={styles.star1}></div>
        <div className={styles.star2}></div>
        <div className={styles.star3}></div>
      </div>
    </div>
  );
};
