import React from "react";
import styled from "styled-components";
import { primaryShadow, primaryBorder } from "../constants";

const NiceButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: ${primaryBorder};
  border-radius: 50%;
  margin-right: 1rem;
  outline: none;
  box-shadow: ${primaryShadow};

  background-color: ${({ level }) => {
    switch (level) {
      case "danger":
        return "rgba(256, 0, 15, .7)";
      case "warning":
        return "rgb(252, 213, 74)";
      case "success":
        return "rgb(70, 255, 155)";
      case "info":
        return "rgb(216, 238, 255)";
      default:
        return "rgb(255, 255, 255)";
    }
  }};
`;

const Icon = styled.img`
  width: 1.1rem;
`;

const TransactionButton = ({ label, onClick, icon, level }) => {
  return (
    <NiceButton onClick={onClick} level={level}>
      <Icon src={icon} alt={label} />
    </NiceButton>
  );
};

export default TransactionButton;
