import type { MerchandiseState } from '@/src/domains/merchandise/domaine/merc.type.ts';

export const MERC_STATE: MerchandiseState = [
  {
    title: 'algorithmic trading',
    category: 'investing',
    available: false,
    quantity: 1,
    cost: { asset: 'operation', value: 1e4 },
    effect: ['investments'],
    requirement: { asset: 'trust', value: 8 },
  },
  {
    title: 'beg for wire',
    category: 'wire',
    available: false,
    quantity: 5,
    cost: { asset: 'trust', value: 1 },
    effect: [{ asset: 'funds', value: 100 }],
    requirement: { asset: 'trust', value: 8 },
  },
  {
    title: 'offer another chance',
    category: 'mechanic',
    available: false,
    quantity: 10,
    cost: { asset: 'creativity', value: 7e4 },
    effect: { type: 'ALLOCATE_TRUST' },
    requirement: { asset: 'creativity', value: 7e4 },
  },
  {
    title: 'full monopoly',
    category: 'marketing',
    available: false,
    quantity: 1,
    cost: { asset: 'funds', value: 1e7 },
    effect: [
      { asset: 'marketingBonus', value: 1e2 },
      { asset: 'trust', value: 1 },
    ],
    requirement: { asset: 'funds', value: 1e7 },
  },
];
