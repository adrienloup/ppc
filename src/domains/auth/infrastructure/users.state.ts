import { PROFILE_STATE } from '@/src/domains/profile/infrastructure/profile.state.ts';
import { FACTORY_STATE } from '@/src/domains/factory/infrastructure/factory.state.ts';

export const USERS_STATE = {
  guest: {
    account: {
      password: 'hJg8YPfarcHLhphiH4AsDZ+aPDwpXIEHSPsEgRXBhuw=',
    },
    profile: PROFILE_STATE,
    factory: FACTORY_STATE,
  },
};
