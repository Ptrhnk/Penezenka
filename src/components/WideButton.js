import React from "react";
import styled from "styled-components";
import { globalShadow, globalBorder, globalGreen } from "../constants";

const BigButton = styled.button`
  height: 70%;
  margin: 1rem;
  border-radius: 5rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : globalGreen)};
  box-shadow: ${globalShadow};
  letter-spacing: 0.2rem;
  text-transform: capitalize;
  font-family: inherit;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: ${globalBorder};
  outline: none;
`;

const Icon = styled.img`
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 0.5rem;
`;

const WideButton = ({ label, onClick, icon, bgColor }) => {
  return (
    <BigButton onClick={onClick} bgColor={bgColor}>
      {icon && <Icon src={icon} alt={label} />}
      <h2>{label}</h2>
    </BigButton>
  );
};

export default WideButton;
