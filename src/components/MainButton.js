import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 50%;
  height: 100%;
  background-color: ${({ focus }) => (focus ? "inherit" : "lightblue")};
  border: ${({ focus }) => (focus ? "none" : "2px solid black")};
  border-top: none;
  border-left: ${({ leftButton }) => leftButton && "none"};
  border-right: ${({ leftButton }) => leftButton || "none"};

  border-radius: ${({ leftButton }) =>
    leftButton ? "0 0 .8rem 0" : "0 0 0 .8rem"};

  outline: none;
`;

const MainButton = ({ label, onClick, focus, leftButton }) => {
  return (
    <StyledButton onClick={onClick} focus={focus} leftButton={leftButton}>
      <h2>{label}</h2>
    </StyledButton>
  );
};

export default MainButton;
