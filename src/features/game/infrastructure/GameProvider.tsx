import { useState } from 'react';
import { GameContext } from '@/src/features/game/infrastructure/GameContext.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Game } from '@/src/features/game/domain/Game.ts';

export function GameProvider({ children }: { children: Children }) {
  const [game, setGame] = useState<Game>({ isPlay: true });

  return <GameContext.Provider value={[game, setGame]}>{children}</GameContext.Provider>;
}
