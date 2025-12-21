import { useEffect, useRef } from 'react';
import vanish from '@/src/assets/sounds/vanish.mp3';
import { useNoticeDispatch } from '@/src/domains/notice/interface/useNotice.ts';
import { useAudioUnlock } from '@/src/shared/hooks/useAudio.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import styles from '@/src/domains/home/home.module.scss';

function HomeComponent() {
  const noticeDispatch = useNoticeDispatch();
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
    <ArticleComponent>
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
      <button
        onClick={() =>
          noticeDispatch({
            type: 'ADD_ALERT',
            alert: {
              id: 'log-in',
              text: `tutu is connected`,
              status: 'success',
              timeout: 1e4,
            },
          })
        }
      >
        notification
      </button>
    </ArticleComponent>
  );
}

export default HomeComponent;
