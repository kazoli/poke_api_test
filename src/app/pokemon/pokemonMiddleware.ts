import { arrayIncludes } from '../general/useful';
import { tPokemonReduxState } from './pokemonTypes';

/**
 * Filter pokemon list
 * @date 2022. 12. 28. - 13:10:53
 *
 * @param {tPokemonReduxState['list']} list
 * @param {string} keyword
 * @returns {tPokemonReduxState['list']}
 */
export const filterPokemonList = (
  list: tPokemonReduxState['list'],
  listCatched: tPokemonReduxState['listCatched'],
  catched: tPokemonReduxState['catched'],
  keyword: string,
) => {
  keyword = keyword.trim();
  if (keyword) {
    const regexp = new RegExp(`^${keyword}.*$`, 'i');
    list = list.filter((element) => element.name.match(regexp));
  }
  if (listCatched) {
    list = list.filter((element) => arrayIncludes(catched, element.name));
  }
  return list;
};
