import { tPokemonReduxState } from "./pokemonTypes";

// Base url for PokéApi
export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

// Pokémon redux
export const initialPokemonReduxState: tPokemonReduxState = {
  loading: false,
  data: [],
};
