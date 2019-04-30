import React, { useState } from "react";
import styled from "styled-components";
import { primaryShadow, primaryBorder, globalGreen } from "../constants";

const Heading = styled.h3`
  margin-bottom: 0.7rem;
  border-bottom: 1px solid black;
`;

const Form = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  margin-top: 0.3rem;
`;

const Input = styled.input`
  border-radius: 1rem;
  padding: 0.2rem 0.6rem;
  border: none;
  outline: none;
`;

const StyledButton = styled.button`
  width: 8rem;
  height: 2rem;
  font-family: inherit;
  color: inherit;
  letter-spacing: inherit;
  background-color: ${globalGreen};
  border-radius: 2rem;
  border: ${primaryBorder};
  box-shadow: ${primaryShadow};
  margin-top: 2rem;
  outline: none;
`;

const TransactionForm = ({ addTransaction }) => {
  const [name, setName] = useState("Transaction name");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("in");

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const currentDate = `${yyyy}-${mm}-${dd}`;
  const [created, setCreated] = useState(currentDate);

  const createTransactionObject = () => {
    const newValue = parseFloat(value);
    const dateArray = created.split("-");
    const parsedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    const newObject = {
      name: name,
      value: type === "in" ? newValue : -newValue,
      type: type,
      created: parsedDate,
      currency: "CZK"
    };
    return newObject;
  };

  return (
    <Form>
      <Heading>Transaction details:</Heading>
      <Row>
        Name:{" "}
        <Input
          onChange={event => setName(event.target.value)}
          value={name}
          type="text"
        />
      </Row>
      <Row>
        Value:{" "}
        <Input
          onChange={event => setValue(event.target.value)}
          value={value}
          type="number"
        />
      </Row>
      <Row>
        Type:{" "}
        <input
          type="radio"
          name="type"
          value={"in"}
          checked={type === "in"}
          onChange={() => setType("in")}
        />{" "}
        In{" "}
        <input
          type="radio"
          name="type"
          value={"out"}
          checked={type === "out"}
          onChange={() => setType("out")}
        />{" "}
        Out
      </Row>
      <Row>
        Created:{" "}
        <Input
          onChange={event => setCreated(event.target.value)}
          value={created}
          type="date"
        />
      </Row>
      <StyledButton onClick={() => addTransaction(createTransactionObject())}>
        Add transaction
      </StyledButton>
    </Form>
  );
};

export default TransactionForm;
