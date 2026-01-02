import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import start from '@/src/assets/sounds/start.mp3';
import { GameContext } from '@/src/domains/game/interface/game.context.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const GameProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const [game, setGame] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(start);

    return () => {
      audioRef.current = null;
    };
  }, []);

  const startGame = useCallback(() => {
    setGame(true);

    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  return <GameContext.Provider value={{ game, startGame }}>{children}</GameContext.Provider>;
};
