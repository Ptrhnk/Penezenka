import React, { useState } from "react";
import styled from "styled-components";

import { primaryShadow, primaryBorder, globalGreen } from "../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Heading = styled.h3`
  margin-bottom: 0.7rem;
  border-bottom: 1px solid black;
`;

const Form = styled.div`
  /* background-color: grey; */
  max-height: 100%;
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
  font-family: inherit;
  letter-spacing: inherit;
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
  const [created, setCreated] = useState(new Date());

  const createTransactionObject = () => ({
    name: name,
    value: parseFloat(value),
    type: type,
    created: `${created.getDate()}.${created.getMonth() +
      1}.${created.getFullYear()}`,
    currency: "CZK",
    id: transaction ? transaction.id : null
  });

  return (
    <Form>
      <Heading>{transaction ? "Edit transaction" : "Add transaction"}</Heading>
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
        <DatePicker
          selected={created}
          onChange={date => setCreated(date)}
          dateFormat="d. MMMM, yyyy"
          maxDate={new Date()}
          className="date-picker-form"
          calendarClassName="calendar-form"
        />
      </Row>
      <StyledButton onClick={() => confirm(createTransactionObject())}>
        {transaction ? "Save" : "Add"}
      </StyledButton>
    </Form>
  );
};

export default TransactionForm;
