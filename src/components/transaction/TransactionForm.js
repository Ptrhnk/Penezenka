import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { globalShadow, globalBorder, globalGreen } from "../../constants";
import FilterButtonGroup from "../FilterButtonGroup";

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
  margin-top: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RowType = styled(Row)`
  justify-content: space-around;
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
  background-color: ${globalGreen};
  padding: 0.4rem 2rem;
  border-radius: 2rem;
  border: ${globalBorder};
  box-shadow: ${globalShadow};
  margin-top: 1rem;
  outline: none;
  /* width: 100%; */
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
      <Heading>
        {transaction ? "Edit transaction:" : "Add transaction:"}
      </Heading>
      <Row>
        <Input
          onChange={event => setName(event.target.value)}
          value={name}
          type="text"
        />
      </Row>
      <Row>
        <Input
          onChange={event => setValue(event.target.value)}
          value={value}
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
      <StyledButton onClick={() => confirm(createTransactionObject())}>
        Save
      </StyledButton>
    </Form>
  );
};

export default TransactionForm;
