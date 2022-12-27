import { tPokemonSelectedTypeList } from "../../app/pokemon/pokemonTypes";

type tProps = {
  pokemonTypeList: tPokemonSelectedTypeList;
};

function SelectedTypeList(props: tProps) {
  return <section className="bg-[#f0f0f0] flex mt-[20px] sm:mt-[50px]"></section>;
}

export default SelectedTypeList;
