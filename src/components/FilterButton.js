import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  border: 2px solid black;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
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

const FilterButton = ({ label, icon }) => {
  return (
    <StyledButton>
      <Icon src={icon} alt={label} />
    </StyledButton>
  );
};

export default FilterButton;
