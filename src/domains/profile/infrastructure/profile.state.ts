import type { Profile } from '@/src/domains/profile/domain/profile.type.ts';

const faces = ['face', 'face_2', 'face_3', 'face_4', 'face_5', 'face_6'];
const face = faces[Math.floor(Math.random() * faces.length)];

export const PROFILE_STATE: Profile = {
  date: '2025-07-26T10:07:29.663Z',
  face: face,
  mode: 'system',
  pause: false,
};
