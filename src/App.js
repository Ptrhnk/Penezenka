import React, { useState } from "react";
import Transaction from "./components/Transaction";

const initialList = [
  { value: 123, currency: "CZK" },
  { value: 123, currency: "EUR" },
  { value: 123, currency: "USD" },
  { value: 123, currency: "USD" }
];

const App = () => {
  const [transactionList, setTransactionList] = useState(initialList);

  const handleClick = () => {
    const newObject = { value: 555, currency: "EUR" };
    setTransactionList([...transactionList, newObject]);
  };
  return (
    <>
      {transactionList.map(({ value, currency }, key) => (
        <Transaction key={key} valueProp={value} currency={currency} />
      ))}
      <button onClick={handleClick}>Add transaction</button>
    </>
  );
};

export default App;
