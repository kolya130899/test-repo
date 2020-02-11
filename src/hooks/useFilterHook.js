export const useFilterHook = (filterState, data) => {
  const filtersData = {
    city: city => filterState.city.includes(city),
    category: category => filterState.category.includes(category),
    price: price => price > filterState.price[0] && price < filterState.price[1]
  };

  const multiPropsFilter = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if (typeof filters[key] !== "function") return true;
        return filters[key](item[key]);
      });
    });
  };

  let filteredData = multiPropsFilter(data, filtersData);

  return { filteredData };
};
