import type { Matter, MatterDispatch } from '@/src/domains/matter/domain/matter.type.ts';

export const matterReducer = (state: Matter, action: MatterDispatch): Matter => {
  switch (action.type) {
    case 'LOAD':
      return action.matter;
    default:
      return state;
  }
};
