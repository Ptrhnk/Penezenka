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
  padding: 0.4rem 1rem;
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

const initTransaction = {
  name: "Name",
  value: 0,
  type: "in",
  currency: "CZK"
};

const getCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};
const parseDateToForm = date => {
  const addZero = num => (num.length === 1 ? `0${num}` : num);
  const dateArr = date.split(".");
  return `${addZero(dateArr[2])}-${addZero(dateArr[1])}-${addZero(dateArr[0])}`;
};

const TransactionForm = ({ transaction, confirm }) => {
  const [name, setName] = useState(
    transaction ? transaction.name : initTransaction.name
  );
  const [value, setValue] = useState(
    transaction ? transaction.value : initTransaction.value
  );
  const [type, setType] = useState(
    transaction ? transaction.type : initTransaction.type
  );
  const [created, setCreated] = useState(
    transaction ? parseDateToForm(transaction.created) : getCurrentDate
  );

  const cutFirstZero = number => {
    if (number.length === 2) {
      const result = number[0] === "0" ? number[1] : number;
      return result;
    }
    return number;
  };

  const createTransactionObject = () => {
    const newValue = parseFloat(value);
    const dateArray = created.split("-");
    const parsedDate = `${cutFirstZero(dateArray[2])}.${cutFirstZero(
      dateArray[1]
    )}.${dateArray[0]}`;
    const newObject = {
      name: name,
      value: newValue,
      type: type,
      created: parsedDate,
      currency: "CZK",
      id: transaction ? transaction.id : null
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
      <StyledButton onClick={() => confirm(createTransactionObject())}>
        {transaction ? "Save" : "Add"}
      </StyledButton>
    </Form>
  );
};

export default TransactionForm;
