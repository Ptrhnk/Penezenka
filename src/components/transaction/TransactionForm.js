import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FilterButtonGroup from "../FilterButtonGroup";
import {
  globalShadow,
  globalBorder,
  globalGreen,
  globalRed
} from "../../constants";

const Heading = styled.h3`
  margin-bottom: 0.7rem;
  border-bottom: 1px solid black;
`;

const Form = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RowType = styled(Row)`
  justify-content: space-around;
  margin-top: 1.1rem;
`;

const RowButton = styled(Row)`
  margin-top: 0;
`;

const Input = styled.input`
  border-radius: 0.3rem;
  padding: 0.3rem 0.7rem;
  border: none;
  outline: none;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: 0.8rem;
  box-shadow: ${globalShadow};
  text-align: center;
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1rem;
  color: inherit;
  letter-spacing: inherit;
  background-color: ${({ bgColor }) =>
    bgColor === "green" ? globalGreen : globalRed};
  padding: 0.4rem 1rem;
  margin: 0 0.4rem;
  border-radius: 2rem;
  border: ${globalBorder};
  box-shadow: ${globalShadow};
  margin-top: 1rem;
  outline: none;
`;

const WarningRow = styled.div`
  margin-top: 1rem;
  min-height: 2rem;
`;

const TransactionForm = ({ transaction, confirm, close }) => {
  const [name, setName] = useState(transaction ? transaction.name : "");
  const [value, setValue] = useState(transaction ? transaction.value : "");
  const [type, setType] = useState(transaction ? transaction.type : "in");
  const [created, setCreated] = useState(new Date());
  const [showWarning, setShowWarning] = useState(false);

  const createTransactionObject = () => ({
    name: name,
    value: parseFloat(value),
    type: type,
    created: `${created.getDate()}.${created.getMonth() +
      1}.${created.getFullYear()}`,
    currency: "CZK",
    id: transaction ? transaction.id : null
  });

  const handleSaveButton = () => {
    name && value ? confirm(createTransactionObject()) : setShowWarning(true);
  };

  return (
    <>
      <Form>
        <Heading>
          {transaction ? "Edit transaction:" : "Add transaction:"}
        </Heading>
        <Row>
          <Input
            onChange={event => setName(event.target.value)}
            value={name}
            placeholder="Name"
            type="text"
          />
        </Row>
        <Row>
          <Input
            onChange={event => setValue(event.target.value)}
            value={value}
            placeholder="Value"
            type="number"
          />
        </Row>
        <Row>
          <DatePicker
            selected={created}
            onChange={date => setCreated(date)}
            dateFormat="d. MMMM, yyyy"
            maxDate={new Date()}
            className="date-picker-form"
            calendarClassName="calendar-form"
          />
        </Row>
        <RowType>
          <FilterButtonGroup
            setTransactionFilter={setType}
            selected={type}
            filterTypes={["in", "out"]}
            small
          />
        </RowType>
      </Form>
      <RowButton>
        <StyledButton onClick={close} bgColor="red">
          Close
        </StyledButton>
        <StyledButton onClick={() => handleSaveButton()} bgColor="green">
          Save
        </StyledButton>
      </RowButton>
      <WarningRow>
        {showWarning && <h3>Please fill name and value!</h3>}
      </WarningRow>
    </>
  );
};

export default TransactionForm;
