// set local storage data
export const setLocalStorage = (key: string, value: string | object | object[]) => {
  if (typeof value !== 'string') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

// get local storage data
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

// set first letter to capital
export const firstCapital = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
