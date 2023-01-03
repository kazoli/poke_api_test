import { arrayIncludes } from '../general/useful';
import { tPokemonReduxState } from './pokemonTypes';

/**
 * Filter pokemon list by typed text and catched status
 * @date 2022. 12. 28. - 13:10:53
 *
 * @param {tPokemonReduxState['list']} list List of all Pokémons related to a type
 * @param {string} keyword Keyword typed by the user
 * @param {tPokemonReduxState['listCatched']} listCatched List of catched Pokémons
 * @param {tPokemonReduxState['catched']} catched List only the catched Pokémons
 * @returns {tPokemonReduxState['list']} The filtered list of Pokémons
 */
export const filterPokemonList = (
  list: tPokemonReduxState['list'],
  listCatched: tPokemonReduxState['listCatched'],
  catched: tPokemonReduxState['catched'],
  keyword: string,
) => {
  if (listCatched) {
    list = list.filter((element) => arrayIncludes(catched, element.name));
  }
  keyword = keyword.trim();
  if (keyword) {
    const regexp = new RegExp(`^${keyword}.*$`, 'i');
    list = list.filter((element) => element.name.match(regexp));
  }
  return list;
};
