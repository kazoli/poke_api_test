/**
 * Set data into localstorage
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} key
 * @param {(string | object | object[])} value
 */
export const setLocalStorage = (key: string, value: string | object | object[]) => {
  if (typeof value !== 'string') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

/**
 * Get data from localstorage
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} key
 * @returns {string | object | object[]}
 */
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  } else {
    return '';
  }
};

/**
 * Alphabetic reordering that can manage ascend and descend order
 * @date 2023. 01. 02. - 13:50:55
 *
 * @param {{ [key: string]: string }[]} array
 * @param {string} key
 * @param {string} order
 * @returns {{ [key: string]: string }[]}
 */
export const alphabetReorder = (
  array: { [key: string]: string }[],
  key: string,
  ascend: boolean = true,
) => {
  return ascend
    ? array.sort((a, b) => a[key].localeCompare(b[key], undefined, { sensitivity: 'accent' }))
    : array.sort((a, b) => b[key].localeCompare(a[key], undefined, { sensitivity: 'accent' }));
};

/**
 * Change string first letter to capital one
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} value
 * @returns {string}
 */
export const firstCapital = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Check an array contains an element (by the fastest indexOf method)
 * @date 2023. 01. 01. - 14:39:52
 *
 * @param {string[]} haystack
 * @param {string} needle
 * @returns {boolean}
 */
export const arrayIncludes = (haystack: string[], needle: string) =>
  haystack.indexOf(needle) !== -1;
