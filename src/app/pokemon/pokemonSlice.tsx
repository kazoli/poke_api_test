import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPokemonReduxState } from './pokemonInitialStates';
import { pokemonGetTypes, pokemonSelectedTypeList } from './pokemonThunks';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialPokemonReduxState,
  reducers: {
    pokemonSelectType: (state, action: PayloadAction<string>) => {
      state.typeSelected = action.payload;
    },
    pokemonFilterType: (state, action: PayloadAction<string>) => {
      state.typeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(pokemonGetTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(pokemonGetTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      })
      .addCase(pokemonGetTypes.rejected, (state) => {
        state.loading = false;
        state.types = [];
      })
      .addCase(pokemonSelectedTypeList.pending, (state) => {
        state.loading = true;
      })
      .addCase(pokemonSelectedTypeList.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTypeList = action.payload;
      })
      .addCase(pokemonSelectedTypeList.rejected, (state) => {
        state.loading = false;
        state.selectedTypeList = [];
      });
  },
});

export const { pokemonSelectType, pokemonFilterType } = pokemonSlice.actions;
export default pokemonSlice.reducer;
