import type { MachAction, MachState } from '@/src/domains/test/machinery/mach.type.ts';

export const machReducer = (state: MachState, action: MachAction): MachState => {
  switch (action.type) {
    case 'LOAD':
      return action.machState;
    case 'BUY_CLIPPER':
      return { ...state, clipper: state.clipper + 1 };
    case 'BUY_MEGA_CLIPPER':
      return { ...state, megaClipper: state.megaClipper + 1 };
    default:
      return state;
  }
};
