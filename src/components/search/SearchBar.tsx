import { useAppDispatch } from '../../app/general/hooks';
import { tDropDownOptions } from '../../app/general/types';
import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import { pokemonFilterType, pokemonSelectType } from '../../app/pokemon/pokemonSlice';
import SearchTypeSelector from './SearchTypeSelector';
import DropDownMenu from '../general/DropDownMenu';
import SearchElementLayout from './SearchElementLayout';

type tProps = {
  pokemonTypeSelected: tPokemonReduxState['typeSelected'];
  pokemonTypeFilter: tPokemonReduxState['typeFilter'];
  pokemonTypes: tDropDownOptions;
};

function SearchBar(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="relative flex flex-wrap items-center gap-[15px]">
      <SearchElementLayout className="flex-[1_1_170px]">
        <DropDownMenu
          selector={<SearchTypeSelector selectedType={props.pokemonTypeSelected} />}
          classContainer="flex-[1_1_auto]"
          classList="peer-focus:grid active:grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[15px] left-0 right-0 mt-[30px] border border-[#000] p-[15px] rounded-[2px] bg-[#fcfefe] shadow-[inset_0_0_50px_0_#b1dcf1]"
          classElement="cursor-pointer border border-[#000000] p-[5px] bg-[#fff] rounded-[2px]"
          options={props.pokemonTypes}
          action={(value) => dispatch(pokemonSelectType(value))}
        />
      </SearchElementLayout>
      <SearchElementLayout className="flex-[10000_10000_300px]">
        <label htmlFor="poke-filter" className="pr-[5px]">
          Filter:
        </label>
        <input
          id="poke-filter"
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
