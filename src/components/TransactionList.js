import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionList, onDelete }) => {
  return (
    <>
      {transactionList
        .map(({ id, name, value, type, created, currency }, key) => (
          <Transaction
            key={key}
            id={id}
            name={name}
            value={value}
            type={type}
            created={created}
            currency={currency}
            onDelete={() => onDelete(id)}
          />
        ))
        .reverse()}
    </>
  );
};

export default TransactionList;
