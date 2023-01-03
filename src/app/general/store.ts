import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonReducer from '../pokemon/pokemonSlice';

/**
 * Redux store that contains slices of reducers and extrareducers
 * @date 2023. 01. 03. - 13:28:19
 */
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

/**
 * Type for useDispatch hook
 * @date 2023. 01. 03. - 13:28:19
 *
 * @export
 * @typedef {tAppDispatch}
 */
export type tAppDispatch = typeof store.dispatch;
/**
 * Type for RootStates
 * @date 2023. 01. 03. - 13:28:19
 *
 * @export
 * @typedef {tRootState}
 */
export type tRootState = ReturnType<typeof store.getState>;
/**
 * App thunk
 * @date 2023. 01. 03. - 13:28:19
 *
 * @export
 * @typedef {AppThunk}
 * @template ReturnType = void
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  tRootState,
  unknown,
  Action<string>
>;
