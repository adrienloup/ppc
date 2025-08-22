export type Resources = {
  wire: number;
  wireCost: number;
  wireQuantity: number;
};

export type ResourcesDispatch =
  | { type: 'LOAD'; resources: Resources }
  | { type: 'BUY_WIRE' }
  | { type: 'WIRE_COST' }
  | { type: 'DECREASE_WIRE'; wire: number }
  | { type: 'WIRE_QUANTITY'; quantity: number };
