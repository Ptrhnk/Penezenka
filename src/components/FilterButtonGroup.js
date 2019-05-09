import React from "react";
import { Link } from "react-router-dom";

import FilterButton from "./FilterButton";
import { globalLightBlue } from "../constants";

const FilterButtonGroup = ({
  filterTypes,
  setTransactionFilter,
  selected,
  overviewButton,
  small
}) => {
  return (
    <>
      {filterTypes.map((filterType, key) => (
        <FilterButton
          key={key}
          type={filterType}
          selected={selected === filterType}
          onClick={() => setTransactionFilter(filterType)}
          small={small}
        />
      ))}
      {overviewButton && (
        <Link to="/summary">
          <FilterButton
            label={"Summary"}
            type="summary"
            bgColor={globalLightBlue}
            small={small}
          />
        </Link>
      )}
    </>
  );
};

export default FilterButtonGroup;
