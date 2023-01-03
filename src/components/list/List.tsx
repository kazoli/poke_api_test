import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import { arrayIncludes } from '../../app/general/useful';
import ListElement from './ListElement';
import ListEmpty from './ListEmpty';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 03. - 11:11:36
 *
 * @typedef {tProps}
 */
type tProps = {
  pokemonList: tPokemonReduxState['list'];
  pokemonCatched: tPokemonReduxState['catched'];
};

/**
 * Pokémon list component
 * @date 2023. 01. 03. - 11:11:36
 *
 * @prop {tPokemonReduxState['list']} pokemonList List of Pokémons related to set conditions
 * @prop {tPokemonReduxState['catched']} pokemonCatched List of Catched Pokémons
 * @returns {JSX.Element}
 */
function List(props: tProps) {
  return props.pokemonList.length ? (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[15px] rounded-[2px] mt-[20px] sm:mt-[50px]">
      {props.pokemonList.map((pokemon, index) => (
        <ListElement
          key={index}
          pokemon={pokemon}
          catched={arrayIncludes(props.pokemonCatched, pokemon.name)}
        />
      ))}
    </section>
  ) : (
    <ListEmpty />
  );
}

export default List;
