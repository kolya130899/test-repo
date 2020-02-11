import { useState } from "react";

export const useFilterStateHook = CITY_IDS => {
  const [filterState, setFilterState] = useState({
    city: CITY_IDS,
    category: [],
    price: [0, 500]
  });

  const onChange = e => {
    setFilterState({
      ...filterState,
      city: showAll(e.target)
    });
  };

  const showAll = id => {
    if (id.selectedIndex === 0) {
      return CITY_IDS;
    } else {
      return [id.selectedIndex];
    }
  };

  const onCheck = e => {
    const id = Number(e.target.id);
    console.log(e.target.checked);
    if (filterState.category.indexOf(id) < 0) {
      setFilterState({
        ...filterState,
        category: [...filterState.category, id]
      });
    } else {
      setFilterState({
        ...filterState,
        category: filterState.category.filter(item => item !== id)
      });
    }
  };

  const onClick = range => {
    setFilterState({
      ...filterState,
      price: [range[0], range[1]]
    });
  };

  return { filterState, onChange, onCheck, onClick };
};
