/**
 * Type definition for Pokémon types
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonTypes : {
 * name: string;
 * url: string;
 * }[]}
 */
export type tPokemonTypes = { name: string; url: string }[];

/**
 * Type definition for Pokémon list element
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonListElement : {
 * name: string;
 * url: string;
 * }}
 */
export type tPokemonListElement = { name: string; url: string };

/**
 * Type definition for Pokémon profile
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonProfile : {
 * imageUrl: string;
 * name: string;
 * weight: string;
 * height: string;
 * notHiddenAbilities: string[];
 * }}
 */
export type tPokemonProfile = {
  imageUrl: string;
  name: string;
  weight: string;
  height: string;
  notHiddenAbilities: string[];
};

/**
 * Type definition for Pokémon redux state
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonReduxState : {
 * status: 'idle' | 'loading' | 'failed';
 * typeSelected: string;
 * types: null | tPokemonTypes;
 * listCatched: boolean;
 * listFilter: string;
 * list: tPokemonListElement[];
 * profile: tPokemonProfile;
 * catched: string[];
 * }}
 */
export type tPokemonReduxState = {
  status: 'idle' | 'loading' | 'failed';
  typeSelected: string;
  types: null | tPokemonTypes;
  listCatched: boolean;
  listFilter: string;
  list: tPokemonListElement[];
  profile: tPokemonProfile;
  catched: string[];
};
