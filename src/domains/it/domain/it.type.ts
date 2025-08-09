export interface IT {
  creativity: number;
  memory: number;
  operation: number;
  operationMax: number;
  processor: number;
  trust: number;
}

export type ITDispatch =
  | { type: 'LOAD'; it: IT }
  | { type: 'INCREASE_TRUST'; trust: number }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'INCREASE_OPERATION' }
  | { type: 'INCREASE_CREATIVITY' };
