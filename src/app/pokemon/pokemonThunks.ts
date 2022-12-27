import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../general/error';
import { tPokemonSelectedTypeList, tPokemonTypes } from './pokemonTypes';

// get all pokémon types
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

// get pokémons for a selected type
export const pokemonSelectedTypeList = createAsyncThunk<
  tPokemonSelectedTypeList,
  string,
  { rejectValue: string }
>('pokemon/pokemonSelectedTypeList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return response.data.pokemon;
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
