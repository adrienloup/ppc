import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { StarterType } from '@/src/shared/ui/starter/starter.type.ts';
import styles from '@/src/shared/ui/starter/starter.module.scss';

export const StarterComponent = ({ className, onStart }: StarterType) => {
  return (
    <div className={classNames(styles.starter, className)}>
      <p className={styles.text}>Your session has been restored. Ready to work?</p>
      <ButtonComponent
        className={styles.button}
        onClick={onStart}
      >
        Press Start
      </ButtonComponent>
    </div>
  );
};
