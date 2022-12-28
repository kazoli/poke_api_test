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
 * Change string first letter to capital one
 * @date 2022. 12. 28. - 13:03:06
 *
 * @param {string} value
 * @returns {string}
 */
export const firstCapital = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
