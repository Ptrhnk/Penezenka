import React from "react";
import styled from "styled-components";

const BigButton = styled.button`
  width: 5rem;
  height: 3rem;
  margin: 0 1rem;
  width: 100%;
  border-radius: 5rem;
  background-color: rgba(70, 255, 155);

  border: 2px solid black;
  outline: none;
`;

const TransactionButton = ({ label, onClick }) => {
  return (
    <BigButton onClick={onClick}>
      <h2>{label}</h2>
    </BigButton>
  );
};

export default TransactionButton;
