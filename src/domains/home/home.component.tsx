import { useRef, useState } from 'react';
import sound from '@/src/assets/sounds/start.mp3';
import { ArticleComponent } from '@/src/shared/ui/article/article.component';
import { StarterComponent } from '@/src/shared/ui/starter/starter.component.tsx';
import styles from '@/src/shared/ui/reader/reader.module.scss';

function HomeComponent() {
  const [start, setStart] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onStart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    setStart(true);
  };

  return (
    <ArticleComponent>
      {start ? <div>home</div> : <StarterComponent onStart={onStart} />}
      <audio
        className={styles.reader}
        ref={audioRef}
        src={sound}
        preload="auto"
      />
    </ArticleComponent>
  );
}

export default HomeComponent;
