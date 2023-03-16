export const sortData = (data, sortMethod) => {
  if (sortMethod === 'asc') {
    return data.sort((a, b) =>
      a.title > b.title ? 0 : b.title > a.title ? -1 : 1
    );
  } else {
    return data.sort((a, b) =>
      b.title > a.title ? 0 : a.title > b.title ? -1 : 1
    );
  }
};
