import { tPokemonReduxState } from './pokemonTypes';

/**
 * Filter pokemon list
 * @date 2022. 12. 28. - 13:10:53
 *
 * @param {tPokemonReduxState['pokemonList']} list
 * @param {string} keyword
 * @returns {tPokemonReduxState['pokemonList']}
 */
export const filterPokemonList = (list: tPokemonReduxState['pokemonList'], keyword: string) => {
  keyword = keyword.trim();
  if (keyword) {
    const regexp = new RegExp(`^${keyword}.*$`, 'i');
    return list.filter((element) => element.name.match(regexp));
  } else {
    return list;
  }
};
