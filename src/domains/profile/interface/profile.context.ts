import { type Dispatch, createContext } from 'react';
import type { ProfileDispatchType, ProfileType } from '@/src/domains/profile/application/profile.type.ts';

export const ProfileContext = createContext<ProfileType | undefined>(undefined);
export const ProfileDispatchContext = createContext<Dispatch<ProfileDispatchType> | undefined>(undefined);
