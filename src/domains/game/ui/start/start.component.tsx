import { useGame } from '@/src/domains/game/interface/useGame.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/game/ui/start/start.module.scss';

export const StartComponent = () => {
  const { startGame } = useGame();

  return (
    <div className={styles.start}>
      <TitleComponent className={styles.title}>
        your session has been restored. press the start button to continue.
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => startGame()}
      >
        start
      </ButtonComponent>
    </div>
  );
};
