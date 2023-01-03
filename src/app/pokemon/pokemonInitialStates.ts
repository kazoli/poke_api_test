import { tPokemonReduxState } from './pokemonTypes';
import { getLocalStorage } from '../general/useful';

/**
 * Poké API url string
 * @date 2023. 01. 03. - 13:13:48
 *
 * @type {string}
 */
export const pokeApiUrl = 'https://pokeapi.co/api/v2/';

/**
 * Pokémon image URL function with dinamic ID passing
 * @date 2023. 01. 03. - 13:13:48
 *
 * @param {number} id The ID of a Pokémon
 * @returns {string}
 */
export const pokeApiImageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

/**
 * Initial state of redux for Pokémon slice
 * @date 2023. 01. 03. - 13:13:48
 *
 * @type {tPokemonReduxState}
 */
export const initialPokemonReduxState: tPokemonReduxState = {
  status: 'idle',
  typeSelected: 'Select type',
  types: null,
  listCatched: false,
  listFilter: '',
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
