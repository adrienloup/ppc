import { useEffect, useRef } from 'react';
import vanish from '@/src/assets/sounds/vanish.mp3';
import { useAudioUnlock } from '@/src/shared/hooks/useAudio.ts';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import styles from '@/src/domains/home/home.module.scss';

function HomeComponent() {
  useAudioUnlock(); // <-- débloque automatiquement après 1 geste

  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<number>(0);

  useAudioUnlock();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      console.log('Auto trigger sound');
      buttonRef.current?.click();
      audioRef.current?.play().catch(() => {});
    }, 2000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <PageComponent>
      <div style={{ margin: 'auto' }}>
        <ClickerComponent
          className={styles.button}
          onClick={() => console.log('clicker')}
          prefix={'+'}
          value={5}
        >
          button
        </ClickerComponent>
        <ReaderComponent
          className={styles.button}
          onClick={() => console.log('player')}
          innerRef={buttonRef}
          sound={vanish}
        >
          ReaderComponent
        </ReaderComponent>
      </div>
    </PageComponent>
  );
}

export default HomeComponent;
