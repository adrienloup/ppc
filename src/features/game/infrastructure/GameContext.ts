import { createContext, type Dispatch } from 'react';
import type { Game } from '@/src/features/game/domain/Game.ts';

export const GameContext = createContext<[Game, Dispatch<Game>] | undefined>(undefined);
