import React from "react";
import styled from "styled-components";

import SummaryBox from "../components/SummaryBox";

const SummaryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: var(--transaction-box-margin);
  height: 100%;
`;

const SummaryPage = ({ transactions, interval }) => {
  const getSum = (total, item) => total + item;

  const getValues = transactions => {
    const values = [0];
    transactions.forEach(element => {
      values.push(element.value);
    });
    return values;
  };

  const getSummary = type => {
    if (type !== "all") {
      const filteredArray = transactions.filter(
        transaction => transaction.type === type
      );
      return getValues(filteredArray).reduce(getSum);
    } else {
      return getValues(transactions).reduce(getSum);
    }
  };

  return (
    <SummaryList>
      <SummaryBox level={"in"} summary={getSummary("in")} />
      <SummaryBox level={"out"} summary={getSummary("out")} />
      <SummaryBox level={"all"} summary={getSummary("all")} />
    </SummaryList>
  );
};

export default SummaryPage;
