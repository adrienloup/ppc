import type { Game } from '@/src/features/game/domain/Game.ts';
import { pageState } from '@/src/features/game/states/pageState.ts';

export const gameState: Game = {
  page: pageState,
  isPlay: true,
};
