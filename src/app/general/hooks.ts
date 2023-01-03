import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { tRootState, tAppDispatch } from './store';

/**
 * Typed useDispatch custom hook
 * @date 2023. 01. 03. - 13:37:41
 *
 * @returns {*}
 */
export const useAppDispatch = () => useDispatch<tAppDispatch>();
/**
 * Typed useSelector custom hook
 * @date 2023. 01. 03. - 13:37:41
 *
 * @type {TypedUseSelectorHook<tRootState>}
 */
export const useAppSelector: TypedUseSelectorHook<tRootState> = useSelector;
