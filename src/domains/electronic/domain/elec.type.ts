export interface Electronic {
  harvesterDrone: number;
  harvesterDroneBonus: number;
  harvesterDroneCost: number;
  harvesterDroneQuantity: number;
  wireDrone: number;
  wireDroneBonus: number;
  wireDroneCost: number;
  wireDroneQuantity: number;
}

export type ElectronicDispatch = { type: 'LOAD'; electronic: Electronic };
