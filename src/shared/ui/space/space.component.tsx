import type { Space } from '@/src/shared/ui/space/space.type.ts';
import styles from '@/src/shared/ui/space/space.module.scss';
import { classNames } from '@/src/shared/utils/classNames.ts';

export const SpaceComponent = ({ planets, stars }: Space) => {
  return (
    <div
      className={styles.space}
      role="presentation"
    >
      {planets &&
        planets.map((n) => (
          <div
            key={n}
            className={classNames([styles.planet, styles[`planet${n}`]])}
          />
        ))}

      {stars && (
        <div className={styles.stars}>
          {stars.map((n) => (
            <div
              key={n}
              className={classNames([styles.star, styles[`star${n}`]])}
            />
          ))}
        </div>
      )}
    </div>
  );
};
