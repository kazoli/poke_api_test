import { tPokemonListElement } from '../../app/pokemon/pokemonTypes';
import { Link } from 'react-router-dom';
import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 03. - 11:08:20
 *
 * @typedef {tProps}
 */
type tProps = {
  pokemon: tPokemonListElement;
  catched: boolean;
};

/**
 * Pokémon list element component
 * @date 2023. 01. 03. - 11:08:20
 *
 * @prop {tPokemonListElement} pokemon List element data of a Pokémon
 * @prop {boolean} catched Given Pokémon has been catched or not
 * @returns {JSX.Element}
 */
function ListElement(props: tProps) {
  return (
    <Link
      to={`/profile?url=${encodeURI(props.pokemon.url)}`}
      className="flex items-center justify-between gap-[5px] cursor-pointer transition-all p-[5px] rounded-[2px] border border-[#c0c0c0] hover:border-[#505050] text-[#505050] hover:text-[#000000] shadow-[inset_0_0_10px_0_#b1dcf1] hover:shadow-[inset_0_0_10px_0_#f6ce09]"
    >
      <span>{props.pokemon.name}</span>
      {props.catched && <PokeBall className="w-[1.2rem] h-[1.2rem]" />}
    </Link>
  );
}

export default ListElement;
