import { createSlice } from '@reduxjs/toolkit';
import { initialPokemonReduxState } from './pokemonInitialStates';
import { getPokemonTypes } from './pokemonThunks';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialPokemonReduxState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonTypes.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getPokemonTypes.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;
