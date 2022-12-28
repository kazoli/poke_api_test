export type tPokemonTypes = { name: string; url: string }[];

export type tPokemonListElement = { name: string; url: string };

export type tPokemonProfile = {
  imageUrl: string;
  name: string;
  weight: string;
  height: string;
  notHiddenAbilities: string[];
};

export type tPokemonReduxState = {
  loading: boolean;
  typeSelected: string;
  typeFilter: string;
  types: null | tPokemonTypes;
  pokemonList: tPokemonListElement[];
  profile: tPokemonProfile;
};
