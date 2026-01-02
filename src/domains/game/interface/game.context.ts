import { createContext } from 'react';
import type { GameType } from '@/src/domains/game/application/game.type.ts';

export const GameContext = createContext<GameType | undefined>(undefined);
