export type Resources = {
  wire: number;
  wireCost: number;
  wireQuantity: number;
};

export type ResourcesDispatch =
  | { type: 'LOAD'; resources: Resources }
  | { type: 'DECREASE_WIRE' }
  | { type: 'AUTO_DECREASE_WIRE'; wire: number }
  | { type: 'WIRE_COST' }
  | { type: 'WIRE_QUANTITY'; quantity: number }
  | { type: 'BUY_WIRE'; cost: number };
