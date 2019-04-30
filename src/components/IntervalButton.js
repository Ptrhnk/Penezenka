import React from "react";
import styled from "styled-components";
import { PRIMARY_SHADOW, PRIMARY_BORDER } from "../constants";

const Button = styled.button`
  background-color: palevioletred;
  width: 5rem;
  height: 3rem;
  border: ${({ PRIMARY_BORDER }) => PRIMARY_BORDER};
  border-radius: 3rem;
  box-shadow: ${({ selected, PRIMARY_SHADOW }) =>
    selected ? `inset ${PRIMARY_SHADOW}` : PRIMARY_SHADOW};
  background-color: #fff;
  outline: none;
  letter-spacing: inherit;
  font-family: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const IntervalButton = ({ label, onClick, selected }) => {
  return (
    <Button
      selected={selected}
      onClick={onClick}
      PRIMARY_SHADOW={PRIMARY_SHADOW}
      PRIMARY_BORDER={PRIMARY_BORDER}
    >
      <h3>{label}</h3>
    </Button>
  );
};

export default IntervalButton;
