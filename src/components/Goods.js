import React from "react";
import { Card } from "./Card";

export const Goods = ({ filteredData }) => {
  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id} className="card">
          <Card {...{ item }} />
        </li>
      ))}
    </ul>
  );
};
