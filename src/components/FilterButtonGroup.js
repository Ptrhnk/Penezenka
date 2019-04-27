import React from "react";
import { Link } from "react-router-dom";

import FilterButton from "./FilterButton";

import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";
import menuIcon from "../icons/menu_icon.svg";

const FilterButtonGroup = ({ filterTransactions, selected }) => {
  return (
    <>
      <FilterButton
        label={"In"}
        selected={selected === "in"}
        icon={arrowUp}
        onClick={() => filterTransactions("in")}
      />
      <FilterButton
        label={"Out"}
        selected={selected === "out"}
        icon={arrowDown}
        onClick={() => filterTransactions("out")}
      />
      <FilterButton
        label={"All"}
        selected={selected === "all"}
        icon={menuIcon}
        onClick={() => filterTransactions("all")}
      />

      <Link to="/summary">
        <FilterButton label={"Summary"} icon={menuIcon} />
      </Link>
    </>
  );
};

export default FilterButtonGroup;
