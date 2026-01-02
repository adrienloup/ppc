import { useProfileDispatch } from '@/src/domains/profile/interface/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { StarterType } from '@/src/shared/ui/starter/starter.type.ts';
import styles from '@/src/shared/ui/starter/starter.module.scss';

export const StarterComponent = ({ className }: StarterType) => {
  const profileDispatch = useProfileDispatch();

  return (
    <div className={classNames(styles.starter, className)}>
      <TitleComponent className={styles.title}>
        your session has been restored. press the start button to continue.
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => profileDispatch({ type: 'SET_START' })}
      >
        start
      </ButtonComponent>
    </div>
  );
};
