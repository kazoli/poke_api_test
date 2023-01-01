import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import { arrayIncludes } from '../../app/general/useful';
import ListElement from './ListElement';
import ListEmpty from './ListEmpty';

type tProps = {
  pokemonList: tPokemonReduxState['list'];
  pokemonCatched: tPokemonReduxState['catched'];
};

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
