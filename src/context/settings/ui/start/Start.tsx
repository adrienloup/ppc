import { useEffect, useRef } from 'react';
import start from '@/src/assets/sounds/start.mp3';
import { useSettingsDispatch } from '@/src/context/settings/useSettings.ts';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import { Case } from '@/src/shared/ui/case/Case.tsx';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import styles from '@/src/context/settings/ui/start/Start.module.scss';

export const Start = () => {
  const settingsDispatch = useSettingsDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(start);

    return () => {
      audioRef.current = null;
    };
  }, []);

  const onStart = () => {
    const audio = audioRef.current;

    settingsDispatch({ type: 'SET_START' });

    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <Case>
      <Title className={styles.title}>your session has been restored. press the start button to continue.</Title>
      <Button
        className={styles.button}
        onClick={onStart}
      >
        start
      </Button>
    </Case>
  );
};
