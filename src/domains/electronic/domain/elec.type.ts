export interface Electronic {
  clipFactory: number;
  clipFactoryBonus: number;
  clipFactoryCost: number;
  harvesterDrone: number;
  harvesterDroneBonus: number;
  harvesterDroneCost: number;
  harvesterDroneQuantity: number;
  wireDrone: number;
  wireDroneBonus: number;
  wireDroneCost: number;
  wireDroneQuantity: number;
}

export type ElectronicDispatch =
  | { type: 'LOAD'; electronic: Electronic }
  | { type: 'CLIP_FACTORY'; cost: number }
  | { type: 'CLIP_FACTORY_BONUS'; bonus: number };
