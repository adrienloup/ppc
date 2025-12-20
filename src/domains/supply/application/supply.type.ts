export type SupplyType = Record<string, { quantity: number }>;

export type SupplyDispatchType =
  | { type: 'INCREASE_ENERGY_QUANTITY'; quantity: number }
  | { type: 'DECREASE_ENERGY_QUANTITY'; quantity: number }
  | { type: 'INCREASE_MATTER_QUANTITY'; quantity: number }
  | { type: 'DECREASE_MATTER_QUANTITY'; quantity: number }
  | { type: 'INCREASE_PAPERCLIP_QUANTITY'; quantity: number }
  | { type: 'DECREASE_PAPERCLIP_QUANTITY'; quantity: number }
  | { type: 'INCREASE_WIRE_QUANTITY'; quantity: number }
  | { type: 'DECREASE_WIRE_QUANTITY'; quantity: number };
