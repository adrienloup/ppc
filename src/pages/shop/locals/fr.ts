import type { Translation } from '@/src/common/shared/types/Translation.ts';

export const fr: Translation = {
  shop: {
    page: 'boutique',
    harvesterDrone: {
      title: 'harvester drone',
      effect: 'gather raw matter and prepare it for processing',
      cost: 'cost: <firstCost />operations',
      quantity: 'quantity: <quantity />',
    },
    improvedClipper: {
      title: 'improved clipper',
      effect: 'increases clipper performance by <firstEffect />',
      cost: 'cost: <firstCost />operations',
      quantity: 'quantity: <quantity />',
    },
    offerAnotherChance: {
      title: 'offer another chance',
      effect: 'reallocate accumulated trust for processor/memory specification',
      cost: 'cost: <firstCost />creativity',
      quantity: 'quantity: <quantity />',
    },
    revTracker: {
      title: 'rev tracker',
      effect: 'automatically calculates average funds per second',
      cost: 'cost: <firstCost />operations',
      quantity: 'quantity: <quantity />',
    },
    wireDrone: {
      title: 'wire drone',
      effect: 'process acquired matter into wire',
      cost: 'cost: <firstCost />operations',
      quantity: 'quantity: <quantity />',
    },
  },
};
