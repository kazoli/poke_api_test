import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/general/hooks';
import { tDropDownOptions } from '../app/general/types';
import { firstCapital } from '../app/general/useful';
import { filterPokemonList } from '../app/pokemon/pokemonMiddleware';
import { pokeApiUrl } from '../app/pokemon/pokemonInitialStates';
import { tPokemonReduxState } from '../app/pokemon/pokemonTypes';
import { pokemonGetTypes, pokemonGetList } from '../app/pokemon/pokemonThunks';
import DefaultLayout from '../components/layout/DefaultLayout';
import SearchBar from '../components/search/SearchBar';
import SearchTypeElement from '../components/search/SearchTypeElement';
import PokemonList from '../components/pokemonList/PokemonList';

/**
 * Main page
 * @date 2022. 12. 27. - 15:44:30
 *
 * @returns {JSX.Element}
 */
function Main() {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon);
  const [selectedTypeUrl, setSelectedTypeUrl] = useState('');
  const [pokemonList, setPokemonList] = useState<tPokemonReduxState['pokemonList']>([]);

  useEffect(() => {
    document.title = 'Main page';
    // get all pokemon types avoiding potention pagination later
    //TODO if (pokemon.types === null) dispatch(pokemonGetTypes(pokeApiUrl + 'type?limit=10000&offset=0'));
  }, [dispatch, pokemon.types]);

  const pokemonTypes: tDropDownOptions = useMemo(() => {
    if (pokemon.types) {
      return pokemon.types.reduce((dropDown: tDropDownOptions, type) => {
        if (type.name === pokemon.typeSelected) {
          setSelectedTypeUrl(type.url);
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
  }, [pokemon.types, pokemon.typeSelected]);

  useEffect(() => {
    if (selectedTypeUrl) dispatch(pokemonGetList(selectedTypeUrl));
  }, [dispatch, selectedTypeUrl]);

  useEffect(() => {
    setPokemonList(filterPokemonList(pokemon.pokemonList, pokemon.typeFilter));
  }, [pokemon.typeFilter, pokemon.pokemonList]);

  return (
    pokemon.types && (
      <DefaultLayout loading={pokemon.loading}>
        <>
          <SearchBar
            pokemonTypeSelected={firstCapital(pokemon.typeSelected)}
            pokemonTypeFilter={pokemon.typeFilter}
            pokemonTypes={pokemonTypes}
          />
          <PokemonList pokemonList={pokemonList} />
        </>
      </DefaultLayout>
    )
  );
}

export default Main;
