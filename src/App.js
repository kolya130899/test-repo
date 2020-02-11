import React from "react";

import { Data } from "./data/data/data";
import { City } from "./data/data/city";

import { useFilterHook } from "./hooks/useFilterHook";
import { useFilterStateHook } from "./hooks/useFilterStateHook";

import open from "./img/open-toggler.png";
import close from "./img/close-toggler.png";
import { GoodsContainer } from "./components/GoodsContainer";
import { Sidebar } from "./components/Sidebar";

const CITY_IDS = City.map(item => item.id);

export default function App() {
  const { filterState, onChange, onCheck, onClick } = useFilterStateHook(
    CITY_IDS
  );

  const { filteredData } = useFilterHook(filterState, Data);

  return (
    <div className="container">
      <input className="switcher" type="checkbox" id="menu" />
      <label htmlFor="menu" className="open">
        <img src={open} alt="open-img" className="open" />
      </label>
      <nav>
        <Sidebar {...{ onChange, onCheck, onClick, Data }} />

        <label htmlFor="menu" className="close">
          <img src={close} alt="close" className="close-img" />
        </label>
      </nav>

      <GoodsContainer {...{ filteredData }} />
    </div>
  );
}
