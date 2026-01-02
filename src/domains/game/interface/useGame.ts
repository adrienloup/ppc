import { useContext } from 'react';
import { GameContext } from '@/src/domains/game/interface/game.context.ts';

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be inside GameProvider');
  return ctx;
};
