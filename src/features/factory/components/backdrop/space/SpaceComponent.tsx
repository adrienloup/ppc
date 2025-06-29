import { StarsComponent } from '@/src/features/factory/components/backdrop/stars/StarsComponent.tsx';
import { StarComponent } from '@/src/features/factory/components/backdrop/star/StarComponent.tsx';
import styles from '@/src/features/factory/components/backdrop/space/SpaceComponent.module.scss';

export const SpaceComponent = ({
  stars,
  star1,
  star2,
  star3,
  star4,
  star5,
}: {
  stars?: string;
  star1?: string;
  star2?: string;
  star3?: string;
  star4?: string;
  star5?: string;
}) => {
  return (
    <div className={styles.space}>
      <StarsComponent className={stars}>
        {star1 && <StarComponent className={star1} />}
        {star2 && <StarComponent className={star2} />}
        {star3 && <StarComponent className={star3} />}
        {star4 && <StarComponent className={star4} />}
        {star5 && <StarComponent className={star5} />}
      </StarsComponent>
    </div>
  );
};
