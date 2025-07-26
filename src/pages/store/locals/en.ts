import type { Translation } from '@/src/shared/types/translation.ts';

export const en: Translation = {
  store: {
    harvesterDrone: {
      title: 'harvester drone',
      effect: 'gather raw matter and prepare it for processing',
      cost: 'cost: <cost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    improvedClipper: {
      title: 'improved clipper',
      effect: 'increases clipper performance by <firstEffect />',
      cost: 'cost: <cost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    offerAnotherChance: {
      title: 'offer another chance',
      effect: 'reallocate accumulated trust for processor and memory specification',
      cost: 'cost: <cost />\u00a0creativity',
      quantity: 'quantity: <quantity />',
    },
    revTracker: {
      title: 'rev tracker',
      effect: 'allows to automatically calculate the average funds available per second',
      cost: 'cost: <cost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    wireDrone: {
      title: 'wire drone',
      effect: 'process acquired matter into wire',
      cost: 'cost: <cost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
  },
};
