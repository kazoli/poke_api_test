import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPokemonReduxState, pokeApiImageUrl } from './pokemonInitialStates';
import { pokemonGetTypes, pokemonGetList, pokemonGetProfile } from './pokemonThunks';
import { tPokemonProfile } from './pokemonTypes';

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
    pokemonResetProfile: (state) => {
      state.profile = initialPokemonReduxState.profile;
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

      .addCase(pokemonGetList.pending, (state) => {
        state.loading = true;
      })
      .addCase(pokemonGetList.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload.map((data) => ({
          name: data.pokemon.name,
          url: data.pokemon.url,
        }));
      })
      .addCase(pokemonGetList.rejected, (state) => {
        state.loading = false;
        state.pokemonList = [];
      })

      .addCase(pokemonGetProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(pokemonGetProfile.fulfilled, (state, action) => {
        state.loading = false;
        const notHiddenAbilities = action.payload.abilities.reduce(
          (prevAbilities: tPokemonProfile['notHiddenAbilities'], ability) => {
            if (!ability.is_hidden) prevAbilities.push(ability.ability.name);
            return prevAbilities;
          },
          [],
        );
        state.profile = {
          imageUrl: pokeApiImageUrl(action.payload.id),
          name: action.payload.name,
          weight: String(action.payload.weight),
          height: String(action.payload.height),
          notHiddenAbilities: notHiddenAbilities,
        };
      })
      .addCase(pokemonGetProfile.rejected, (state) => {
        state.loading = false;
        state.profile = initialPokemonReduxState.profile;
      });
  },
});

export const { pokemonSelectType, pokemonFilterType, pokemonResetProfile } = pokemonSlice.actions;
export default pokemonSlice.reducer;
