import React from "react";
import styled from "styled-components";

const NiceButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 1rem;
  outline: none;

  background-color: ${({ level }) => {
    switch (level) {
      case "danger":
        return "rgba(256, 0, 15, .7)";
      case "warning":
        return "rgba(252, 213, 74)";
      case "success":
        return "rgba(70, 255, 155)";
      case "info":
        return "rgba(216, 238, 255)";
      default:
        return "rgb(255, 255, 255)";
    }
  }};
`;

const Icon = styled.img`
  height: 1.3rem;
  width: 1.3rem;
`;

const TransactionButton = ({ label, onClick, icon, level }) => {
  return (
    <NiceButton onClick={onClick} level={level}>
      <Icon src={icon} alt={label} />
    </NiceButton>
  );
};

export default TransactionButton;
