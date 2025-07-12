import { useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/account/interfaces/ui/play/play.module.scss';

export const PlayComponent = () => {
  const dispatch = useAccountDispatch();
  const label = `factory is stopped<span>press to resume</span>`;

  return (
    <div className={styles.play}>
      <ButtonComponent
        className={styles.button}
        onClick={() => dispatch({ type: 'TOGGLE_PLAY_PAUSE' })}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ButtonComponent>
      <div
        className={styles.backdrop}
        onClick={() => dispatch({ type: 'TOGGLE_PLAY_PAUSE' })}
      ></div>
    </div>
  );
};
