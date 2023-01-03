/**
 * Set data into localstorage
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} key The key name of local storage element
 * @param {(string | object | object[])} value The value that will be stored to the key
 */
export const setLocalStorage = (key: string, value: string | object | object[]) => {
  if (typeof value !== 'string') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

/**
 * Get data from localstorage
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} key The key name of local storage element
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
 * Alphabetic reordering that can manage ascend and descend ordering and accent is taking into considertion as well
 * @date 2023. 01. 02. - 13:50:55
 *
 * @param {{ [key: string]: string }[]} array Array that will be reordered
 * @param {string} key The key by which the array will be reordered
 * @param {boolean} ascend Direction of order
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
 * Check an array contains an element
 * @date 2023. 01. 01. - 14:39:52
 *
 * @param {string[]} haystack The array in which it searches
 * @param {string} needle Subject of search
 * @returns {boolean}
 */
export const arrayIncludes = (haystack: string[], needle: string) =>
  haystack.indexOf(needle) !== -1;
