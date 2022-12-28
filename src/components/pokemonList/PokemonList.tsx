import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import PokemonListElement from './PokemonListElement';
import PokemonListEmpty from './PokemonListEmpty';

type tProps = {
  pokemonList: tPokemonReduxState['pokemonList'];
};

function PokemonList(props: tProps) {
  return props.pokemonList.length ? (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[15px] rounded-[2px] mt-[20px] sm:mt-[50px]">
      {props.pokemonList.map((pokemon, index) => (
        <PokemonListElement key={index} pokemon={pokemon} />
      ))}
    </section>
  ) : (
    <PokemonListEmpty />
  );
}

export default PokemonList;
