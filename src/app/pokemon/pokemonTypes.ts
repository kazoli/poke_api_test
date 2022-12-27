export type tPokemonTypes = { name: string; url: string }[];

export type tPokemonSelectedTypeList = { pokemon: { name: string; url: string }; slot: number }[];

export type tPokemonReduxState = {
  loading: boolean;
  typeSelected: string;
  typeFilter: string;
  types: null | tPokemonTypes;
  selectedTypeList: tPokemonSelectedTypeList;
};
