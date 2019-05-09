import React from "react";
import styled from "styled-components";
import { globalShadow, globalBorder } from "../constants";

const Button = styled.button`
  background-color: #fff;
  padding: 0.7rem 1.4rem;
  border: ${globalBorder};
  border-radius: 3rem;
  box-shadow: ${({ selected }) =>
    selected ? `inset ${globalShadow}` : globalShadow};
  outline: none;
  letter-spacing: inherit;
  font-family: inherit;
  font-size: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const IntervalButton = ({ label, onClick, selected }) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {label}
    </Button>
  );
};

export default IntervalButton;
