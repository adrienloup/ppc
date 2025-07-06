import { useAccountDispatch } from '@/src/features/account/useAccount.ts';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import styles from '@/src/components/profile/pause/pause.module.scss';

export const PauseComponent = () => {
  const setAccount = useAccountDispatch();
  const label = `app.star <span>app.press</span>`;

  return (
    <div className={styles.pause}>
      <ButtonComponent
        className={styles.button}
        onClick={() => setAccount({ type: 'TOGGLE_PAUSE' })}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ButtonComponent>
      <div
        className={styles.backdrop}
        onClick={() => setAccount({ type: 'TOGGLE_PAUSE' })}
      ></div>
    </div>
  );
};
