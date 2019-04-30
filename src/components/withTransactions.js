import React, { useState } from "react";
import initialList from "../InitialList";

const withTransactions = WrappedComponent => {
  const Wrapper = () => {
    const [transactions, setTransactions] = useState(initialList);

    return (
      <WrappedComponent
        transactions={transactions}
        {...this.state}
        {...this.props}
      />
    );
  };
  return Wrapper;
};

export default withTransactions;
