export type Matter = {
  acquiredMatter: number;
  availableMatter: number;
};

export type MatterDispatch = { type: 'LOAD'; matter: Matter };
