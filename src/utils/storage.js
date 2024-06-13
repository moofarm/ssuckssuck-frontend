export const setStorage = (key, value) => {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);

  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
      expires: expirationDate.getTime(),
    }),
  );
};

export const getStorage = key => {
  let item = localStorage.getItem(key);
  if (item) {
    let parsedItem = JSON.parse(item);
    if (new Date().getTime() <= parsedItem.expires) {
      return parsedItem.data;
    } else {
      localStorage.removeItem(key);
    }
  }
  return null;
};
