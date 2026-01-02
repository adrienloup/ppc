import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { StarterType } from '@/src/shared/ui/starter/starter.type.ts';
import styles from '@/src/shared/ui/starter/starter.module.scss';

export const StarterComponent = ({ className, onStart }: StarterType) => {
  return (
    <div className={classNames(styles.starter, className)}>
      <TitleComponent className={styles.title}>Your session has been restored. Ready to play?</TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={onStart}
      >
        Press Start
      </ButtonComponent>
    </div>
  );
};
