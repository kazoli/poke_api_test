import { dummyTypes } from './dummyTypes'; //TODO remove
import { tPokemonReduxState } from './pokemonTypes';

// Base url for PokéApi
export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

// Pokémon redux
export const initialPokemonReduxState: tPokemonReduxState = {
  loading: false,
  typeSelected: 'Select a type',
  typeFilter: '',
  types: dummyTypes, // TODO set null
  selectedTypeList: [],
};
