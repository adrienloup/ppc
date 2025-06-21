import type { NamePage } from '@/src/features/game/domain/NamePage.ts';

export interface Game {
  page: NamePage;
  isPlay: boolean;
}
