import { useContext } from 'react';
import { ProfileContext, ProfileDispatchContext } from '@/src/domains/profile/interface/profile.context.ts';

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be inside ProfileProvider');
  return ctx;
};

export const useProfileDispatch = () => {
  const ctx = useContext(ProfileDispatchContext);
  if (!ctx) throw new Error('useProfileDispatch must be inside ProfileProvider');
  return ctx;
};
