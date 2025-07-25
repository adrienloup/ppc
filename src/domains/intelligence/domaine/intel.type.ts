export interface Intelligence {
  memory: number;
  operation: number;
  operationMax: number;
  processor: number;
  trust: number;
}

export type IntelligenceDispatch =
  | { type: 'LOAD'; intelligence: Intelligence }
  | { type: 'INCREASE_TRUST'; trust: number }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' };
