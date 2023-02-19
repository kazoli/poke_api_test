import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import { tDropDownOptions } from '../../app/general/types';
import { filterPokemonList } from '../../app/pokemon/pokemonMiddleware';
import { pokeApiUrl } from '../../app/pokemon/pokemonInitialStates';
import { tPokemonReduxState } from '../../app/pokemon/pokemonTypes';
import { pokemonGetTypes, pokemonGetList } from '../../app/pokemon/pokemonThunks';
import DefaultLayout from '../layout/DefaultLayout';
import SearchBar from '../search/SearchBar';
import SearchTypeElement from '../search/SearchTypeElement';
import List from '../list/List';

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
  const [pokemonList, setPokemonList] = useState<tPokemonReduxState['list']>([]);

  useEffect(() => {
    document.title = 'Pokémon catcher';
    if (pokemon.types === null) {
      dispatch(pokemonGetTypes(pokeApiUrl + 'type?limit=10000&offset=0'));
    }
  }, [dispatch, pokemon.types]);

  const pokemonTypes: tDropDownOptions = useMemo(() => {
    if (pokemon.types) {
      return pokemon.types.reduce((dropDown: tDropDownOptions, type) => {
        if (type.name === pokemon.typeSelected) {
          setSelectedTypeUrl(type.url);
        } else {
          dropDown.push({
            key: type.name,
            value: <SearchTypeElement typeName={type.name} />,
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
    setPokemonList(
      filterPokemonList(pokemon.list, pokemon.listCatched, pokemon.catched, pokemon.listFilter),
    );
  }, [pokemon.list, pokemon.listCatched, pokemon.catched, pokemon.listFilter]);

  return (
    pokemon.types && (
      <DefaultLayout loading={pokemon.status === 'loading'}>
        <>
          <SearchBar
            pokemonListCatched={pokemon.listCatched}
            pokemonTypeSelected={pokemon.typeSelected}
            pokemonListFilter={pokemon.listFilter}
            pokemonTypes={pokemonTypes}
          />
          <List pokemonList={pokemonList} pokemonCatched={pokemon.catched} />
        </>
      </DefaultLayout>
    )
  );
}

export default Main;
