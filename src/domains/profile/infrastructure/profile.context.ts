import { type Dispatch, createContext } from 'react';
import type { Profile, ProfileDispatch } from '@/src/domains/profile/domain/profile.type.ts';

export const ProfileContext = createContext<Profile | undefined>(undefined);
export const ProfileDisContext = createContext<Dispatch<ProfileDispatch> | undefined>(undefined);
