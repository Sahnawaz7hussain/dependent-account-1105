const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));

  return data;
};

const removeFromLocalStorage = (key) => {
  let res = localStorage.removeItem(key);
};

export { saveToLocalStorage, getLocalStorageData, removeFromLocalStorage };
