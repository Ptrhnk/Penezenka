import React from "react";
import styled from "styled-components";
import { primaryShadow, primaryBorder } from "../constants";

const Button = styled.button`
  background-color: palevioletred;
  width: 5rem;
  height: 3rem;
  border: ${primaryBorder};
  border-radius: 3rem;
  box-shadow: ${({ selected }) =>
    selected ? `inset ${primaryShadow}` : primaryShadow};
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
    <Button selected={selected} onClick={onClick}>
      <h3>{label}</h3>
    </Button>
  );
};

export default IntervalButton;
