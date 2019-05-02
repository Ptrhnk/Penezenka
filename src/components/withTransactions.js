import React, { useState, useEffect } from "react";
import axios from "axios";

const withTransactions = WrappedComponent => {
  const Wrapper = () => {
    const [transactions, setTransactions] = useState([]);

    // useEffect(() => {
    //   axios.get("http://localhost:3003/transactions").then(response => {
    //     setTransactions(response.data);
    //     console.log(response.data);
    //   });
    // }, []);

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
