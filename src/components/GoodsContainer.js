import React from "react";

import { Goods } from "./Goods";

export const GoodsContainer = ({ filteredData }) => {
  return (
    <article className="container__goods">
      <h1 className="plug">Need to choose category</h1>
      <Goods {...{ filteredData }} />
    </article>
  );
};
