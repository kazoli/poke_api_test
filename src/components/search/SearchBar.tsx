import { useAppDispatch } from '../../app/general/hooks';
import { tDropDownOptions } from '../../app/general/types';
import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import {
  pokemonFilterType,
  pokemonListCatched,
  pokemonSelectType,
} from '../../app/pokemon/pokemonSlice';
import SearchTypeSelector from './SearchTypeSelector';
import DropDownMenu from '../general/DropDownMenu';
import SearchElementLayout from './SearchElementLayout';

type tProps = {
  pokemonListCatched: tPokemonReduxState['listCatched'];
  pokemonTypeSelected: tPokemonReduxState['typeSelected'];
  pokemonTypeFilter: tPokemonReduxState['typeFilter'];
  pokemonTypes: tDropDownOptions;
};

function SearchBar(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="relative flex flex-wrap items-center gap-[15px]">
      <DropDownMenu
        selector={<SearchTypeSelector selectedType={props.pokemonTypeSelected} />}
        classContainer="flex-auto"
        classList="peer-focus:grid active:grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[15px] left-0 right-0 mt-[15px] border border-[#000] p-[15px] rounded-[2px] bg-[#fcfefe] shadow-[inset_0_0_50px_0_#b1dcf1]"
        classElement="cursor-pointer border border-[#000000] bg-[#fff] rounded-[2px]"
        options={props.pokemonTypes}
        action={(value) => dispatch(pokemonSelectType(value))}
      />
      <SearchElementLayout className="flex-auto flex items-center gap-[5px]">
        <input
          id="list-catched"
          type="checkbox"
          className="appearance-none checked:bg-[url('../utils/images/Pokeball.svg')] bg-no-repeat checked:shadow-[0_0_1px_0_#000,inset_0_0_1px_0_#000] shadow-[0_0_1px_1px_#000] rounded-full w-[1rem] h-[1rem] cursor-pointer outline-none"
          checked={props.pokemonListCatched}
          onChange={() => dispatch(pokemonListCatched())}
        />
        <label htmlFor="list-catched">Catched only</label>
      </SearchElementLayout>
      <SearchElementLayout className="flex-[10000_10000_300px] flex items-center gap-[5px]">
        <label htmlFor="list-filter">Filter:</label>
        <input
          id="list-filter"
          type="text"
          autoComplete="off"
          placeholder="Type a Pokémon's name"
          className="flex-[1]"
          value={props.pokemonTypeFilter}
          onChange={(e) => dispatch(pokemonFilterType(e.target.value))}
        />
      </SearchElementLayout>
    </section>
  );
}

export default SearchBar;
