import React from "react";
import styled from "styled-components";

import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";
import menuIcon from "../icons/menu_icon.svg";
import summaryIcon from "../icons/diagram.svg";

const StyledIcon = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;

const getIcon = type => {
  switch (type) {
    case "in":
      return arrowUp;
    case "out":
      return arrowDown;
    case "summary":
      return summaryIcon;
    case "all":
    default:
      return menuIcon;
  }
};

const Icon = ({ type }) => {
  return <StyledIcon src={getIcon(type)} alt={type} />;
};

export default Icon;
