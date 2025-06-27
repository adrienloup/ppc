import { createContext, type Dispatch } from 'react';
import type { Profile, ProfileDispatch } from '@/src/features/profile/domain/Profile.ts';

export const ProfileContext = createContext<[Profile, Dispatch<ProfileDispatch>] | undefined>(
  undefined
);
