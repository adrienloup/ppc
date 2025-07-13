export interface ResoState {
  wire: number;
}

export type ResoAction = { type: 'LOAD'; payload: ResoState } | { type: 'DECREASE_WIRE_STOCK'; wire: number };
