import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPokemonReduxState, pokeApiImageUrl } from './pokemonInitialStates';
import { pokemonGetTypes, pokemonGetList, pokemonGetProfile } from './pokemonThunks';
import { tPokemonReduxState } from './pokemonTypes';
import { alphabetReorder, firstCapital, setLocalStorage } from '../general/useful';

/**
 * Pokémon reducers and extra reducers with `createSlice` from `@reduxjs/toolkit`
 * @date 2023. 01. 03. - 11:54:26
 *
 * @param {WritableDraft<tPokemonReduxState>} state State object of `@reduxjs/toolkit`
 * @param {PayloadAction} action Contains value sent and type of reducer
 */
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialPokemonReduxState,
  reducers: {
    pokemonSelectType: (state, action: PayloadAction<string>) => {
      state.typeSelected = action.payload;
    },
    pokemonFilterType: (state, action: PayloadAction<string>) => {
      state.listFilter = action.payload;
    },
    pokemonListCatched: (state) => {
      state.listCatched = !state.listCatched;
    },
    pokemonResetProfile: (state) => {
      state.status = 'idle';
      state.profile = initialPokemonReduxState.profile;
    },
    pokemonCatch: (state, action: PayloadAction<string>) => {
      state.catched = [...state.catched, action.payload];
      setLocalStorage('pokemonCatched', state.catched);
    },
    pokemonRelease: (state, action: PayloadAction<string>) => {
      state.catched = state.catched.filter((element) => element !== action.payload);
      setLocalStorage('pokemonCatched', state.catched);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(pokemonGetTypes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokemonGetTypes.fulfilled, (state, action) => {
        state.status = 'idle';
        const list = action.payload.map((type) => ({
          ...type,
          name: firstCapital(type.name),
        }));
        state.types = alphabetReorder(list, 'name') as tPokemonReduxState['types'];
      })
      .addCase(pokemonGetTypes.rejected, (state) => {
        state.status = 'failed';
        state.types = [];
      })

      .addCase(pokemonGetList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokemonGetList.fulfilled, (state, action) => {
        state.status = 'idle';
        const list = action.payload.map((data) => ({
          name: firstCapital(data.pokemon.name),
          url: data.pokemon.url,
        }));
        state.list = alphabetReorder(list, 'name') as tPokemonReduxState['list'];
      })
      .addCase(pokemonGetList.rejected, (state) => {
        state.status = 'failed';
        state.list = [];
      })

      .addCase(pokemonGetProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokemonGetProfile.fulfilled, (state, action) => {
        state.status = 'idle';
        const notHiddenAbilities = action.payload.abilities.reduce(
          (prevAbilities: tPokemonReduxState['profile']['notHiddenAbilities'], ability) => {
            if (!ability.is_hidden) prevAbilities.push(firstCapital(ability.ability.name));
            return prevAbilities;
          },
          [],
        );
        state.profile = {
          imageUrl: pokeApiImageUrl(action.payload.id),
          name: firstCapital(action.payload.name),
          weight: String(action.payload.weight / 10), // convert to kilogram from hectogram
          height: String(action.payload.height * 10), // convert to centimeter from decimeter
          notHiddenAbilities: notHiddenAbilities,
        };
      })
      .addCase(pokemonGetProfile.rejected, (state) => {
        state.status = 'failed';
        state.profile = initialPokemonReduxState.profile;
      });
  },
});

export const {
  pokemonSelectType,
  pokemonFilterType,
  pokemonListCatched,
  pokemonResetProfile,
  pokemonCatch,
  pokemonRelease,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
