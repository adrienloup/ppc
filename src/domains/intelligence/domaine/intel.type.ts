export interface Intel {
  memory: number;
  operation: number;
  operationMax: number;
  processor: number;
  trust: number;
}

export type IntelDispatch =
  | { type: 'LOAD'; intelligence: Intel }
  | { type: 'INCREASE_TRUST'; trust: number }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'INCREASE_OPERATION' };
