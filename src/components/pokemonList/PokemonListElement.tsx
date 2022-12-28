import { tPokemonListElement } from '../../app/pokemon/pokemonTypes';
import { firstCapital } from '../../app/general/useful';
import { Link } from 'react-router-dom';

type tProps = {
  pokemon: tPokemonListElement;
};

function PokemonListElement(props: tProps) {
  return (
    <Link
      to={`/profile?url=${encodeURI(props.pokemon.url)}`}
      className="cursor-pointer transition-all p-[5px] rounded-[2px] border border-[#c0c0c0] hover:border-[#505050] text-[#505050] hover:text-[#000000] shadow-[inset_0_0_10px_0_#b1dcf1] hover:shadow-[inset_0_0_10px_0_#f6ce09]"
    >
      {firstCapital(props.pokemon.name)}
    </Link>
  );
}

export default PokemonListElement;
