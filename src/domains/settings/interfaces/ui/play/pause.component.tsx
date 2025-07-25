import { useSettiDispatch } from '@/src/domains/settings/interfaces/useSetti.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/settings/interfaces/ui/play/pause.module.scss';

export const PauseComponent = () => {
  const dispatch = useSettiDispatch();

  return (
    <div className={styles.pause}>
      <ButtonComponent
        className={styles.button}
        onClick={() => dispatch({ type: 'SET_PLAY_PAUSE' })}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: `factory is stopped<span>press to resume</span>` }}
        />
      </ButtonComponent>
      <div
        className={styles.backdrop}
        onClick={() => dispatch({ type: 'SET_PLAY_PAUSE' })}
      ></div>
    </div>
  );
};
