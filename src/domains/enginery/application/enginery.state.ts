import type { EngineryType } from '@/src/domains/enginery/application/enginery.type.ts';

export const ENGINERY_STATE: EngineryType = {
  clipper: {
    bonus: 0,
    consumption: { asset: '', value: 0 },
    cost: { asset: 'funds', value: 1 },
    production: { asset: 'clip', value: 1 },
    quantity: 1,
  },
  autoClipper: {
    bonus: 0,
    consumption: { asset: 'energy', value: 0 },
    cost: { asset: 'funds', value: 5 },
    production: { asset: 'clip', value: 1 },
    quantity: 0,
  },
  megaClipper: {
    bonus: 0,
    consumption: { asset: 'energy', value: 0 },
    cost: { asset: 'funds', value: 500 },
    production: { asset: 'clip', value: 500 },
    quantity: 0,
  },
  paperclipFactory: {
    bonus: 0,
    consumption: { asset: 'energy', value: 2e8 },
    cost: { asset: 'funds', value: 1e5 },
    production: { asset: 'clip', value: 1e3 },
    quantity: 0,
  },
  farmerDrone: {
    bonus: 0,
    consumption: { asset: 'energy', value: 1e3 },
    cost: { asset: 'clip', value: 4e6 },
    production: { asset: 'wire', value: 3e9 },
    quantity: 0,
  },
  harvesterDrone: {
    bonus: 0,
    consumption: { asset: 'energy', value: 1e3 },
    cost: { asset: 'clip', value: 4e6 },
    production: { asset: 'matter', value: 5e9 },
    quantity: 0,
  },
  fighterDrone: {
    bonus: 0,
    consumption: { asset: 'energy', value: 1e3 },
    cost: { asset: 'clip', value: 4e6 },
    production: { asset: '', value: 0 },
    quantity: 0,
  },
  batteryTower: {
    bonus: 0,
    consumption: { asset: 'energy', value: 1e7 },
    cost: { asset: 'funds', value: 4e3 },
    production: { asset: 'storage', value: 3e9 },
    quantity: 0,
  },
  solarFarm: {
    bonus: 0,
    consumption: { asset: 'energy', value: 0 },
    cost: { asset: 'funds', value: 2e3 },
    production: { asset: 'energy', value: 5e7 },
    quantity: 0,
  },
};
