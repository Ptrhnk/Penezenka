import React from "react";
import { Link } from "react-router-dom";

import FilterButton from "./FilterButton";
import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";
import menuIcon from "../icons/menu_icon.svg";
import summaryIcon from "../icons/diagram.svg";
import { globalLightBlue } from "../constants";

const FilterButtonGroup = ({
  filterTypes,
  setTransactionFilter,
  selected,
  overviewButton,
  small
}) => {
  const getIcon = filterType => {
    switch (filterType) {
      case "in":
        return arrowUp;
      case "out":
        return arrowDown;
      case "all":
      default:
        return menuIcon;
    }
  };

  return (
    <>
      {filterTypes.map((filterType, key) => (
        <FilterButton
          key={key}
          icon={getIcon(filterType)}
          label={filterType}
          selected={selected === filterType}
          onClick={() => setTransactionFilter(filterType)}
          small={small}
        />
      ))}
      {overviewButton && (
        <Link to="/summary">
          <FilterButton
            label={"Summary"}
            icon={summaryIcon}
            bgColor={globalLightBlue}
            small={small}
          />
        </Link>
      )}
    </>
  );
};

export default FilterButtonGroup;
