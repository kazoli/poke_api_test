import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/general/hooks';
import { tDropDownOptions } from '../app/general/types';
import { firstCapital } from '../app/general/useful';
import { pokeApiUrl } from '../app/pokemon/pokemonInitialStates';
import { tPokemonSelectedTypeList } from '../app/pokemon/pokemonTypes';
import { pokemonGetTypes, pokemonSelectedTypeList } from '../app/pokemon/pokemonThunks';
import DefaultLayout from '../components/layout/DefaultLayout';
import Positioner from '../components/layout/Positioner';
import SearchBar from '../components/main/SearchBar';
import SearchTypeElement from '../components/main/SearchTypeElement';
import SelectedTypeList from '../components/main/SelectedTypeList';

/**
 * Main page
 * @date 2022. 12. 27. - 15:44:30
 *
 * @returns {JSX.Element}
 */
function Main() {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon);
  const [pokemonList, setPokemonList] = useState<tPokemonSelectedTypeList>([]);

  useEffect(() => {
    document.title = 'Main page';
    //get all pokemon types avoiding potention pagination later
    //TODO if (pokemon.types === null) dispatch(pokemonGetTypes(pokeApiUrl + 'type?limit=10000&offset=0'));
  }, [dispatch, pokemon.types]);

  const pokemonTypes: tDropDownOptions = useMemo(() => {
    if (pokemon.types) {
      return pokemon.types.reduce((dropDown: tDropDownOptions, type) => {
        if (type.name === pokemon.typeSelected) {
          dispatch(pokemonSelectedTypeList(type.url));
        } else {
          dropDown.push({
            key: type.name,
            value: <SearchTypeElement typeName={firstCapital(type.name)} />,
          });
        }
        return dropDown;
      }, []);
    } else {
      return [];
    }
  }, [dispatch, pokemon.types, pokemon.typeSelected]);

  useEffect(() => {
    const filter = pokemon.typeFilter.trim();
    if (filter) {
      // TODO find all names are matching filter
    } else {
      setPokemonList(pokemon.selectedTypeList);
    }
    console.log(pokemon.selectedTypeList);//TODO
  }, [pokemon.typeFilter, pokemon.selectedTypeList]);

  return (
    pokemon.types && (
      <DefaultLayout loading={pokemon.loading}>
        <Positioner className="py-[20px] sm:py-[50px]">
          <SearchBar
            pokemonTypeSelected={pokemon.typeSelected}
            pokemonTypeFilter={pokemon.typeFilter}
            pokemonTypes={pokemonTypes}
          />
          <SelectedTypeList pokemonTypeList={pokemonList} />
        </Positioner>
      </DefaultLayout>
    )
  );
}

export default Main;
