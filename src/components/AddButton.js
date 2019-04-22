import React from "react";
import styled from "styled-components";
import addIcon from "./../icons/add.svg";

const BigButton = styled.button`
  /* margin: 0 1rem; */
  width: 90%;
  height: 80%;
  border-radius: 5rem;
  background-color: rgb(70, 255, 155);
  box-shadow: var(--primary-shadow);

  letter-spacing: inherit;
  font-family: inherit;
  /* text-transform: uppercase; */

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  outline: none;
`;

const Icon = styled.img`
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 0.5rem;
`;

const TransactionButton = ({ label, onClick }) => {
  return (
    <BigButton onClick={onClick}>
      <Icon src={addIcon} alt={label} />
      <h2>Add new</h2>
    </BigButton>
  );
};

export default TransactionButton;
