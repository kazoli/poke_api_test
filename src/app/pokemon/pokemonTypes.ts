/**
 * Pokemon types type declaration
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonTypes}
 */
export type tPokemonTypes = { name: string; url: string }[];

/**
 * Pokemon list element type declaration
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonListElement}
 */
export type tPokemonListElement = { name: string; url: string };

/**
 * Pokemon profile type declaration
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonProfile}
 */
export type tPokemonProfile = {
  imageUrl: string;
  name: string;
  weight: string;
  height: string;
  notHiddenAbilities: string[];
};

/**
 * Pokemon redux state type declaration
 * @date 2022. 12. 28. - 16:56:56
 *
 * @export
 * @typedef {tPokemonReduxState}
 */
export type tPokemonReduxState = {
  status: 'idle' | 'loading' | 'failed';
  typeSelected: string;
  listFilter: string;
  types: null | tPokemonTypes;
  listCatched: boolean;
  list: tPokemonListElement[];
  profile: tPokemonProfile;
  catched: string[];
};
