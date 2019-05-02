import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, onDelete, onEdit }) =>
  transactions
    .map((transaction, key) => (
      <Transaction
        key={key}
        data={transaction}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))
    .reverse();

export default TransactionList;
