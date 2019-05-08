import React from "react";
import styled from "styled-components";

import { globalShadow, globalBorder } from "../constants";

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

const Icon = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;

const FilterButton = ({ label, icon, onClick, selected, bgColor, small }) => {
  return (
    <StyledButton
      onClick={onClick}
      selected={selected}
      bgColor={bgColor}
      small={small}
    >
      <Icon src={icon} alt={label} />
    </StyledButton>
  );
};

export default FilterButton;
