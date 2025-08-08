import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Space } from '@/src/shared/ui/space/space.type.ts';
import styles from '@/src/shared/ui/space/space.module.scss';

export const SpaceComponent = ({ planets, stars }: Space) => {
  return (
    <div
      className={styles.space}
      role="presentation"
    >
      {planets &&
        planets.map((planet) => (
          <div
            key={planet}
            className={classNames(styles.planet, styles[`planet${planet}`])}
          />
        ))}
      {stars &&
        stars.map((stars, index) => (
          <div
            key={index}
            className={classNames(styles.stars, styles[`stars${index + 1}`])}
          >
            {stars.map((star) => (
              <div
                key={star}
                className={classNames(styles.star, styles[`star${star}`])}
              />
            ))}
          </div>
        ))}
    </div>
  );
};
