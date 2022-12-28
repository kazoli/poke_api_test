import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../general/error';
import { tPokemonListElement, tPokemonTypes } from './pokemonTypes';

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
