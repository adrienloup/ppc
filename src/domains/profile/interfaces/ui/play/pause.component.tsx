import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/play/pause.module.scss';

export const PauseComponent = () => {
  const dispatch = useProfileDis();

  return (
    <div className={styles.pause}>
      <ButtonComponent
        className={styles.button}
        onClick={() => dispatch({ type: 'SET_PLAY_PAUSE' })}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: `<span>factory is stopped</span>press to resume` }}
        />
      </ButtonComponent>
      <div
        className={styles.backdrop}
        role="presentation"
        onClick={() => dispatch({ type: 'SET_PLAY_PAUSE' })}
      ></div>
    </div>
  );
};
