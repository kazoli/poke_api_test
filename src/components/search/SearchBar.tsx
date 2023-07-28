import { useAppDispatch } from '../../app/general/hooks';
import { tDropDownOptions } from '../../app/general/types';
import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import {
  pokemonFilterType,
  pokemonListCatched,
  pokemonSelectType,
} from '../../app/pokemon/pokemonSlice';
import { MdClear } from 'react-icons/md';
import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';
import SearchTypeSelector from './SearchTypeSelector';
import DropDownMenu from '../general/DropDownMenu';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:31:37
 *
 * @typedef {tProps}
 */
type tProps = {
  pokemonListCatched: tPokemonReduxState['listCatched'];
  pokemonTypeSelected: tPokemonReduxState['typeSelected'];
  pokemonListFilter: tPokemonReduxState['listFilter'];
  pokemonTypes: tDropDownOptions;
};

/**
 * Search bar for main page
 * @date 2023. 01. 02. - 16:31:37
 *
 * @prop {tPokemonReduxState['listCatched']} pokemonListCatched Catched Pokémons list
 * @prop {tPokemonReduxState['typeSelected']} pokemonTypeSelected Name of the selected Pokémon type
 * @prop {tPokemonReduxState['listFilter']} pokemonListFilter Filtering text for Pokémon list
 * @prop {tDropDownOptions} pokemonTypes Pokémon types for drop down menu
 * @returns {JSX.Element}
 */
function SearchBar(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="relative flex flex-wrap items-center gap-[15px]">
      <div className="search-bar-element flex-[1_1_150px]">
        <DropDownMenu
          selector={<SearchTypeSelector selectedType={props.pokemonTypeSelected} />}
          classContainer="w-[100%]"
          classList="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[15px] left-0 right-0 mt-[30px] border border-[#000] p-[15px] rounded-[2px] bg-[#fcfefe] shadow-[inset_0_0_50px_0_#b1dcf1]"
          classElement="cursor-pointer border border-[#000000] bg-[#fff] rounded-[2px]"
          options={props.pokemonTypes}
          action={(value) => dispatch(pokemonSelectType(value))}
        />
      </div>
      <div
        className="search-bar-element flex-auto flex items-center gap-[5px] cursor-pointer"
        onClick={() => dispatch(pokemonListCatched())}
      >
        <button className="shadow-[0_0_1px_1px_#000,inset_0_0_1px_0_#000] rounded-full w-[1rem] h-[1rem]">
          {props.pokemonListCatched && <PokeBall className="w-[1rem] h-[1rem]" />}
        </button>
        <span>Catched only</span>
      </div>
      <div className="search-bar-element flex-[10000_10000_300px] flex items-center gap-[5px]">
        <label htmlFor="list-filter">Filter:</label>
        <input
          id="list-filter"
          type="text"
          autoComplete="off"
          placeholder="Type a Pokémon's name"
          className="flex-[1]"
          value={props.pokemonListFilter}
          onChange={(e) => dispatch(pokemonFilterType(e.target.value))}
        />
        <MdClear
          className="cursor-pointer"
          title="Clear filter text"
          onClick={() => dispatch(pokemonFilterType(''))}
        />
      </div>
    </section>
  );
}

export default SearchBar;
