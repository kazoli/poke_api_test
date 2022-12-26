import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../general/error';
import axios from 'axios';

// get search data from PokéApi
export const getPokemonTypes = createAsyncThunk<object, string, { rejectValue: string }>(
  'pokemon/getPokemonTypes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(encodeURI(query));
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  },
);
