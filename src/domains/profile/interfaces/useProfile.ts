import { useContext } from 'react';
import { ProfileContext, ProfileDisContext } from '@/src/domains/profile/infrastructure/profile.context.ts';

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be inside ProfileProvider');
  return ctx;
};

export const useProfileDis = () => {
  const ctx = useContext(ProfileDisContext);
  if (!ctx) throw new Error('useProfileDis must be inside ProfileProvider');
  return ctx;
};
