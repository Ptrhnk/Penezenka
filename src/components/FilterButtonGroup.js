import React from "react";
import { Link } from "react-router-dom";

import FilterButton from "./FilterButton";

import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";
import menuIcon from "../icons/menu_icon.svg";
import summaryIcon from "../icons/web_asset.svg";

const FilterButtonGroup = ({ setTransactionFilter, selected }) => {
  return (
    <>
      <FilterButton
        label={"In"}
        selected={selected === "in"}
        icon={arrowUp}
        onClick={() => setTransactionFilter("in")}
      />
      <FilterButton
        label={"Out"}
        selected={selected === "out"}
        icon={arrowDown}
        onClick={() => setTransactionFilter("out")}
      />
      <FilterButton
        label={"All"}
        selected={selected === "all"}
        icon={menuIcon}
        onClick={() => setTransactionFilter("all")}
      />

      <Link to="/summary">
        <FilterButton
          label={"Summary"}
          icon={summaryIcon}
          bgColor={"#00d4ff"}
        />
      </Link>
    </>
  );
};

export default FilterButtonGroup;
