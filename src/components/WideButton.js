import React from "react";
import styled from "styled-components";

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

  border: var(--primary-border);
  outline: none;
`;

const Icon = styled.img`
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 0.5rem;
`;

const WideButton = ({ label, onClick, icon }) => {
  return (
    <BigButton onClick={onClick}>
      {icon && <Icon src={icon} alt={label} />}
      <h2>{label}</h2>
    </BigButton>
  );
};

export default WideButton;
