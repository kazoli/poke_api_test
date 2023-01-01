import { dummyTypeList } from './dummyTypeList.js'; //TODO remove
import { dummyTypes } from './dummyTypes.js'; //TODO remove
import { dummyProfile } from './dummyProfile.js'; //TODO remove
import { tPokemonReduxState } from './pokemonTypes';
import { getLocalStorage } from '../general/useful';

export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

export const pokeApiImageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const initialPokemonReduxState: tPokemonReduxState = {
  status: 'idle',
  typeSelected: 'No selected type',
  typeFilter: '',
  types: dummyTypes, // TODO remove
  listCatched: false,
  list: dummyTypeList, // TODO remove
  // profile: dummyProfile, // TODO remove
  // types: null,
  // list: [],
  profile: {
    imageUrl: '',
    name: '',
    weight: '',
    height: '',
    notHiddenAbilities: [],
  },
  catched: getLocalStorage('pokemonCatched'),
};
