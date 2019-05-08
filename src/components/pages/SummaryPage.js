import React, { useState } from "react";
import styled from "styled-components";

import SummaryBox from "../SummaryBox";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import IntervalButtonGroup from "../IntervalButtonGroup";
import WideButton from "../WideButton";
import BackIcon from "../../icons/arrow_back.svg";
import useTransactions from "./useTransactions";
import { transactionBoxMargin, globalLightBlue } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SummaryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  margin-bottom: ${transactionBoxMargin};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const SummaryPage = ({ history }) => {
  const [interval, setInterval] = useState("all");
  const [transactions] = useTransactions();
  const [date, setDate] = useState(new Date());

  const getDate = () =>
    `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  const getMonth = () => `${date.getMonth() + 1}.${date.getFullYear()}`;

  const getSum = (total, item) => total + item;

  const getValues = transactions => {
    const values = [0];
    transactions.forEach(transaction => {
      values.push(
        transaction.type === "in" ? transaction.value : -transaction.value
      );
    });
    return values;
  };

  const getFilteredTransactions = () => {
    switch (interval) {
      case "day":
        return transactions.filter(({ created }) => created === getDate());
      case "month":
        return transactions.filter(
          ({ created }) =>
            created.substr(
              created.length - getMonth().length,
              getMonth().length
            ) === getMonth()
        );
      case "all":
      default:
        return transactions;
    }
  };

  const getSummary = type => {
    if (type !== "all") {
      const filteredArray = getFilteredTransactions().filter(
        transaction => transaction.type === type
      );
      return getValues(filteredArray).reduce(getSum);
    } else {
      return getValues(getFilteredTransactions()).reduce(getSum);
    }
  };

  return (
    <>
      <Header>
        <IntervalButtonGroup
          selected={interval}
          setInterval={setInterval}
          intervalTypes={["day", "month", "all"]}
        />
      </Header>
      <Content>
        {interval === "day" && (
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="d. MMMM, yyyy"
            maxDate={new Date()}
            className="date-picker-summary"
          />
        )}
        {interval === "month" && (
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="MMMM, yyyy"
            className="date-picker-summary"
            showMonthYearPicker
          />
        )}
        <SummaryList>
          <SummaryBox level={"in"} summary={getSummary("in")} />
          <SummaryBox level={"out"} summary={getSummary("out")} />
          <SummaryBox level={"all"} summary={getSummary("all")} />
        </SummaryList>
      </Content>
      <Footer>
        <WideButton
          onClick={() => history.push("/")}
          label={"Back"}
          bgColor={globalLightBlue}
          icon={BackIcon}
        />
      </Footer>
    </>
  );
};

export default SummaryPage;
