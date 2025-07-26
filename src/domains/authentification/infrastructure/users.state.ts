import { PROFILE_STATE } from '@/src/domains/profile/infrastructure/profile.state.ts';
import { FACTORY_STATE } from '@/src/domains/factory/infrastructure/factory.state.ts';

export const USERS_STATE = {
  aaa: {
    password: '7ZaOhA0Q0tMTqHC8ExpOLDEdetCb3zKzQYFHIh9RpuI=',
    profile: PROFILE_STATE,
    factory: FACTORY_STATE,
  },
  guest: {
    password: 'hJg8YPfarcHLhphiH4AsDZ+aPDwpXIEHSPsEgRXBhuw=',
    profile: PROFILE_STATE,
    factory: FACTORY_STATE,
  },
};
