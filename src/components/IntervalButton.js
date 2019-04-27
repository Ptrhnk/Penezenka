import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: palevioletred;
  width: 5rem;
  height: 3rem;
  /* margin: 0 1rem; */
  border: var(--primary-border);
  border-radius: 3rem;
  box-shadow: var(--primary-shadow);
  background-color: #fff;
  outline: none;
  letter-spacing: inherit;
  font-family: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const IntervalButton = ({ label, onClick }) => {
  return (
    <Button>
      <h3>{label}</h3>
    </Button>
  );
};

export default IntervalButton;
