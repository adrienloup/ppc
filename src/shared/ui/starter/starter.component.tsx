import start from '@/src/assets/sounds/start.mp3';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import styles from '@/src/shared/ui/starter/starter.module.scss';

export const StarterComponent = () => {
  return (
    <div className={styles.starter}>
      <p className={styles.text}>Your session has been restored. Ready to work?</p>
      <ReaderComponent
        className={styles.button}
        sound={start}
      >
        Press Start
      </ReaderComponent>
    </div>
  );
};
