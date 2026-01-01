import { useEffect, useRef } from 'react';
import notice from '@/src/assets/sounds/notice.mp3';
import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
//import { useAudioUnlock } from '@/src/shared/hooks/useAudioUnlock.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import { ReaderComponent } from '@/src/shared/ui/reader/reader.component.tsx';
import styles from '@/src/domains/home/home.module.scss';

function HomeComponent() {
  // const [, addNotice] = useNotice();
  const addNotice = useNotice();
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<number>(0);

  //useAudioUnlock();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      console.log('Auto trigger sound');
      buttonRef.current?.click();
      audioRef.current?.play().catch(() => {});
    }, 2e3);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <ArticleComponent>
      <ClickerComponent
        className={styles.button}
        onClick={() => console.log('clicker')}
        value="+5"
      >
        button
      </ClickerComponent>
      <button onClick={() => addNotice({ text: 'tut' })}>button</button>
      <button onClick={() => addNotice({ text: 'tut' })}>button</button>
      <button onClick={() => addNotice({ text: 'tut', timeout: 1e4 })}>button</button>
      <ReaderComponent
        className={styles.button}
        onClick={() => addNotice({ text: 'tut' })}
        innerRef={buttonRef}
        sound={notice}
      >
        1
      </ReaderComponent>
    </ArticleComponent>
  );
}

export default HomeComponent;
