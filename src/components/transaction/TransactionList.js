import React from "react";
import styled from "styled-components";

import Transaction from "./Transaction";

const InfoText = styled.h3`
  margin-top: 1rem;
`;

const TransactionList = ({ transactions, onDelete, onEdit, clickable }) =>
  transactions.length > 0 ? (
    transactions
      .map((transaction, key) => (
        <Transaction
          key={key}
          data={transaction}
          onDelete={onDelete}
          onEdit={onEdit}
          clickable={clickable}
        />
      ))
      .reverse()
  ) : (
    <InfoText>No transactions</InfoText>
  );

export default TransactionList;
