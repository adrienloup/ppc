import { useContext } from 'react';
import { GameContext } from '@/src/features/game/infrastructure/GameContext.ts';

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
