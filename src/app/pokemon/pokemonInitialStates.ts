import { tPokemonReduxState } from './pokemonTypes';
import { getLocalStorage } from '../general/useful';

export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

export const pokeApiImageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const initialPokemonReduxState: tPokemonReduxState = {
  status: 'idle',
  typeSelected: 'Select type',
  listFilter: '',
  listCatched: false,
  types: null,
  list: [],
  profile: {
    imageUrl: '',
    name: '',
    weight: '',
    height: '',
    notHiddenAbilities: [],
  },
  catched: getLocalStorage('pokemonCatched'),
};
