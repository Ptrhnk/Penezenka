import React from "react";
import styled from "styled-components";
import { primaryShadow, primaryBorder } from "../constants";

const BigButton = styled.button`
  width: 90%;
  height: 80%;
  border-radius: 5rem;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgb(70, 255, 155)"};
  box-shadow: ${primaryShadow};
  letter-spacing: inherit;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${primaryBorder};
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
