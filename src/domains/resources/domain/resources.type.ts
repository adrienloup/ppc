export type Resources = {
  wire: number;
  wireCost: number;
  wireQuantity: number;
};

export type ResourcesDispatch =
  | { type: 'LOAD'; resources: Resources }
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'DECREASE_WIRE'; wire: number }
  | { type: 'WIRE_COST' }
  | { type: 'WIRE_QUANTITY'; quantity: number };
