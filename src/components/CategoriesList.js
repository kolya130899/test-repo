import React from "react";

export const CategoriesList = ({ onCheck, Category, count }) => {
  return (
    <ul className="categories">
      {Category.map(item => (
        <li key={item.id}>
          <input
            className="styled-checkbox"
            id={`${item.id}`}
            type="checkbox"
            onChange={e => onCheck(e)}
          ></input>
          <label htmlFor={`${item.id}`}>
            <span>{item.name}</span>
            <span className="goods-quantity">{`(${count(item.id)})`}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
