import { dummyTypeList } from './dummyTypeList'; //TODO remove
import { dummyTypes } from './dummyTypes'; //TODO remove
import { tPokemonReduxState } from './pokemonTypes';

export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

export const pokeApiImageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const initialPokemonReduxState: tPokemonReduxState = {
  loading: false,
  typeSelected: 'Select a type',
  typeFilter: '',
  types: dummyTypes, // TODO set null
  pokemonList: dummyTypeList, // TODO set []
  profile: { imageUrl: '', name: '', weight: '', height: '', notHiddenAbilities: [] },
};
