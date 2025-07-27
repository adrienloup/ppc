import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/play/play.module.scss';

export const PlayComponent = () => {
  const proDispatch = useProfileDis();

  return (
    <ButtonComponent
      className={styles.play}
      onClick={() => proDispatch({ type: 'SET_PLAY_PAUSE' })}
    >
      pause
    </ButtonComponent>
  );
};
