import React from "react";

import { City } from "../data/data/city";

export const Dropdown = ({ onChange }) => {
  return (
    <select onChange={e => onChange(e)}>
      <option id="all">All</option>
      {City.map(item => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
};
