import type { NameScreen } from '@/src/features/game/domain/NameScreen.ts';

export interface Game {
  screen: NameScreen;
  isPlay: boolean;
}
