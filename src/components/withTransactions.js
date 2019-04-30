import React, { useState } from "react";
import initialList from "../InitialList";

const withTransactions = WrappedComponent => {
  const Wrapper = () => {
    const [transactions, setTransactions] = useState(initialList);

    return (
      <WrappedComponent
        transactions={transactions}
        setTransactions={setTransactions}
      />
    );
  };
  return Wrapper;
};

export default withTransactions;
