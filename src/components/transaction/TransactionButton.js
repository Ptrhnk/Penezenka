import React from "react";
import styled from "styled-components";
import {
  globalShadow,
  globalBorder,
  globalRed,
  globalYellow,
  globalGreen
} from "../../constants";

const NiceButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: ${globalBorder};
  border-radius: 50%;
  margin-right: 1rem;
  outline: none;
  box-shadow: ${globalShadow};

  background-color: ${({ level }) => {
    switch (level) {
      case "danger":
        return `${globalRed}`;
      case "warning":
        return `${globalYellow}`;
      case "success":
      default:
        return `${globalGreen}`;
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
