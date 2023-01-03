import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../general/error';
import { tPokemonListElement, tPokemonTypes } from './pokemonTypes';

/**
 * Get all types of Pokémons to drop down menu in search bar with `createAsyncThunk` from `@reduxjs/toolkit`
 * @date 2023. 01. 03. - 11:54:26
 *
 * @param {string} typePrefix Promise lifecycle action types based on the action type prefix
 * @param payloadCreator A callback function that should return a promise containing the result of asynchronous logic
 * @returns {response: tPokemonTypes | errorMessage: string}
 */
export const pokemonGetTypes = createAsyncThunk<tPokemonTypes, string, { rejectValue: string }>(
  'pokemon/pokemonGetTypes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(encodeURI(query));
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  },
);

/**
 * Get all Pokémons for a type with `createAsyncThunk` from `@reduxjs/toolkit`
 * @date 2023. 01. 03. - 11:54:26
 *
 * @param {string} typePrefix Promise lifecycle action types based on the action type prefix
 * @param payloadCreator A callback function that should return a promise containing the result of asynchronous logic
 * @returns {response: { pokemon: tPokemonListElement; slot: number }[] | errorMessage: string}
 */
export const pokemonGetList = createAsyncThunk<
  { pokemon: tPokemonListElement; slot: number }[],
  string,
  { rejectValue: string }
>('pokemon/pokemonGetList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return response.data.pokemon;
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

/**
 * Get profile data of a Pokémon with `createAsyncThunk` from `@reduxjs/toolkit`
 * @date 2023. 01. 03. - 11:54:26
 *
 * @param {string} typePrefix Promise lifecycle action types based on the action type prefix
 * @param payloadCreator A callback function that should return a promise containing the result of asynchronous logic
 * @returns {response: {
 * id: number;
 * name: string;
 * weight: number;
 * height: number;
 * abilities: { ability: { name: string; url: string }; is_hidden: boolean; slot: number }[];
 * } | errorMessage: string}
 */
export const pokemonGetProfile = createAsyncThunk<
  {
    id: number;
    name: string;
    weight: number;
    height: number;
    abilities: { ability: { name: string; url: string }; is_hidden: boolean; slot: number }[];
  },
  string,
  { rejectValue: string }
>('pokemon/pokemonGetProfile', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      id: response.data.id,
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      abilities: response.data.abilities,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
