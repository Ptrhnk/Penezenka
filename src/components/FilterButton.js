import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: var(--primary-border);
  border-radius: 50%;
  box-shadow: ${({ selected }) =>
    selected ? "inset var(--primary-shadow)" : "var(--primary-shadow)"};
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

const FilterButton = ({ label, icon, onClick, selected, bgColor }) => {
  return (
    <StyledButton onClick={onClick} selected={selected} bgColor={bgColor}>
      <Icon src={icon} alt={label} />
    </StyledButton>
  );
};

export default FilterButton;
