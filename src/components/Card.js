import React, { Fragment } from "react";

// import { useDataBuffer } from "../hooks/useDataBuffer";
import { Category } from "../data/data/category";
import { City } from "../data/data/city";
// import { Data } from "../data/data/data";

export const Card = ({ item }) => {
  // const { state } = useDataBuffer();

  // console.log("item");
  // console.log(item);
  // console.log("??");
  // let city = City.filter(cityItem => cityItem.id === item.city);
  // console.log(city);

  let city = City.find(cityItem => cityItem.id === item.city);
  let category = Category.find(
    categoryItem => categoryItem.id === item.category
  );

  return (
    <Fragment>
      <div className={"card__img" + Math.ceil(item.city / 2)}>
        <span>{city.name}</span>
      </div>
      <h3>Affiliate Marketing - A Beginner's Guide to Earning Online</h3>
      <div className="book-info">
        <span className="category">{category.name}</span>
        <h4 className="price">{`\u0024${item.price}`}</h4>
        {/* // <input type="text" value={`\u0024${item.price}`} readOnly></input> */}
      </div>
    </Fragment>
  );
};
