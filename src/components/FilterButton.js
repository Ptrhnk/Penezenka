import React from "react";
import styled from "styled-components";

import { globalShadow, globalBorder } from "../constants";
import Icon from "./Icon";

const StyledButton = styled.button`
  width: ${({ small }) => (small ? "2.5rem" : "3rem")};
  height: ${({ small }) => (small ? "2.5rem" : "3rem")};
  border: ${globalBorder};
  border-radius: 50%;
  box-shadow: ${({ selected }) =>
    selected ? `inset ${globalShadow}` : globalShadow};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const FilterButton = ({ type, onClick, selected, bgColor, small }) => {
  return (
    <StyledButton
      onClick={onClick}
      selected={selected}
      bgColor={bgColor}
      small={small}
    >
      <Icon type={type} />
    </StyledButton>
  );
};

export default FilterButton;
