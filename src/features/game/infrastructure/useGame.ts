import { useContext } from 'react';
import { GameContext } from '@/src/features/game/infrastructure/GameContext.ts';

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
