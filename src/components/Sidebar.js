import React from "react";

import { Dropdown } from "./Dropdown";
import { CategoriesList } from "./CategoriesList";

import RangeSlider from "./RangeSlider";

import { Category } from "../data/data/category";

export const Sidebar = ({ onChange, onCheck, onClick, Data }) => {
  const countGoodsQuantity = id => {
    const goods = Data.filter(item => id === item.category);
    return goods.length;
  };
  return (
    <aside className="container__filters">
      <h3>CITY</h3>
      <Dropdown onChange={onChange} />
      <h3>CATEGORIES</h3>
      <CategoriesList
        onCheck={onCheck}
        {...{ Category }}
        count={countGoodsQuantity}
      />
      <h3>PRICE</h3>
      <RangeSlider onClick={onClick} />
    </aside>
  );
};
