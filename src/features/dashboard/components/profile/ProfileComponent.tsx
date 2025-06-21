import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/dashboard/components/profile/ProfileComponent.module.scss';

export const ProfileComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={classNames([styles.profile, isActive ? styles.active : ''])}>
      <article className={styles.article}>screen 1</article>
      <div className={styles.planet}></div>
      <div className={styles.stars}>
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </div>
  );
};
