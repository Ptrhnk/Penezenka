import React, { useState, useEffect } from "react";
import { getTransactions } from "../lib/getTransactions";

const withTransactions = WrappedComponent => {
  const Wrapper = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      getTransactions().then(setTransactions);
    }, []);

    return (
      <WrappedComponent
        transactions={transactions}
        setTransactions={setTransactions}
      />
    );
  };

  // Wrapper.displayName = ``;

  return Wrapper;
};

export default withTransactions;
